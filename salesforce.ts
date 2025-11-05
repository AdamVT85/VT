import axios, { AxiosInstance } from 'axios'

interface SalesforceAuthResponse {
  access_token: string
  instance_url: string
  token_type: string
}

interface Villa {
  id: string
  name: string
  description: string
  longDescription: string
  location: string
  destination: string
  price: number
  currency: string
  bedrooms: number
  bathrooms: number
  sleeps: number
  images: string[]
  amenities: string[]
  features: string[]
  latitude?: number
  longitude?: number
  availability: {
    startDate: string
    endDate: string
  }[]
}

interface SearchParams {
  destination?: string
  checkIn?: string
  checkOut?: string
  guests?: number
  minPrice?: number
  maxPrice?: number
  bedrooms?: number
  page?: number
  limit?: number
}

class SalesforceClient {
  private accessToken: string | null = null
  private instanceUrl: string | null = null
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_SALESFORCE_API_URL,
      timeout: 30000,
    })
  }

  private async authenticate(): Promise<void> {
    try {
      const params = new URLSearchParams({
        grant_type: 'password',
        client_id: process.env.SALESFORCE_CLIENT_ID || '',
        client_secret: process.env.SALESFORCE_CLIENT_SECRET || '',
        username: process.env.SALESFORCE_USERNAME || '',
        password: `${process.env.SALESFORCE_PASSWORD}${process.env.SALESFORCE_SECURITY_TOKEN}`,
      })

      const response = await axios.post<SalesforceAuthResponse>(
        'https://login.salesforce.com/services/oauth2/token',
        params
      )

      this.accessToken = response.data.access_token
      this.instanceUrl = response.data.instance_url
    } catch (error) {
      console.error('Salesforce authentication failed:', error)
      throw new Error('Failed to authenticate with Salesforce')
    }
  }

  private async ensureAuthenticated(): Promise<void> {
    if (!this.accessToken) {
      await this.authenticate()
    }
  }

  private getHeaders() {
    return {
      Authorization: `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
    }
  }

  async searchVillas(params: SearchParams): Promise<{ villas: Villa[]; total: number }> {
    await this.ensureAuthenticated()

    try {
      // Build SOQL query based on search parameters
      let query = `SELECT Id, Name, Description__c, Long_Description__c, Location__c, 
                   Destination__c, Price__c, Currency__c, Bedrooms__c, Bathrooms__c, 
                   Sleeps__c, Images__c, Amenities__c, Features__c, Latitude__c, Longitude__c 
                   FROM Villa__c WHERE Active__c = true`

      if (params.destination) {
        query += ` AND Destination__c = '${params.destination}'`
      }

      if (params.bedrooms) {
        query += ` AND Bedrooms__c >= ${params.bedrooms}`
      }

      if (params.minPrice) {
        query += ` AND Price__c >= ${params.minPrice}`
      }

      if (params.maxPrice) {
        query += ` AND Price__c <= ${params.maxPrice}`
      }

      query += ` ORDER BY Price__c ASC`

      const limit = params.limit || 12
      const offset = ((params.page || 1) - 1) * limit
      query += ` LIMIT ${limit} OFFSET ${offset}`

      const response = await this.client.get('/query', {
        params: { q: query },
        headers: this.getHeaders(),
        baseURL: this.instanceUrl || undefined,
      })

      const villas: Villa[] = response.data.records.map((record: any) => ({
        id: record.Id,
        name: record.Name,
        description: record.Description__c,
        longDescription: record.Long_Description__c,
        location: record.Location__c,
        destination: record.Destination__c,
        price: record.Price__c,
        currency: record.Currency__c || 'GBP',
        bedrooms: record.Bedrooms__c,
        bathrooms: record.Bathrooms__c,
        sleeps: record.Sleeps__c,
        images: record.Images__c ? JSON.parse(record.Images__c) : [],
        amenities: record.Amenities__c ? JSON.parse(record.Amenities__c) : [],
        features: record.Features__c ? JSON.parse(record.Features__c) : [],
        latitude: record.Latitude__c,
        longitude: record.Longitude__c,
        availability: [],
      }))

      return {
        villas,
        total: response.data.totalSize,
      }
    } catch (error) {
      console.error('Error searching villas:', error)
      return { villas: [], total: 0 }
    }
  }

  async getVillaById(id: string): Promise<Villa | null> {
    await this.ensureAuthenticated()

    try {
      const query = `SELECT Id, Name, Description__c, Long_Description__c, Location__c, 
                     Destination__c, Price__c, Currency__c, Bedrooms__c, Bathrooms__c, 
                     Sleeps__c, Images__c, Amenities__c, Features__c, Latitude__c, Longitude__c,
                     Check_In_Time__c, Check_Out_Time__c, Minimum_Stay__c 
                     FROM Villa__c WHERE Id = '${id}' AND Active__c = true LIMIT 1`

      const response = await this.client.get('/query', {
        params: { q: query },
        headers: this.getHeaders(),
        baseURL: this.instanceUrl || undefined,
      })

      if (response.data.records.length === 0) {
        return null
      }

      const record = response.data.records[0]

      return {
        id: record.Id,
        name: record.Name,
        description: record.Description__c,
        longDescription: record.Long_Description__c,
        location: record.Location__c,
        destination: record.Destination__c,
        price: record.Price__c,
        currency: record.Currency__c || 'GBP',
        bedrooms: record.Bedrooms__c,
        bathrooms: record.Bathrooms__c,
        sleeps: record.Sleeps__c,
        images: record.Images__c ? JSON.parse(record.Images__c) : [],
        amenities: record.Amenities__c ? JSON.parse(record.Amenities__c) : [],
        features: record.Features__c ? JSON.parse(record.Features__c) : [],
        latitude: record.Latitude__c,
        longitude: record.Longitude__c,
        availability: [],
      }
    } catch (error) {
      console.error('Error fetching villa:', error)
      return null
    }
  }

  async getDestinations(): Promise<{ name: string; count: number }[]> {
    await this.ensureAuthenticated()

    try {
      const query = `SELECT Destination__c, COUNT(Id) count 
                     FROM Villa__c WHERE Active__c = true 
                     GROUP BY Destination__c ORDER BY COUNT(Id) DESC`

      const response = await this.client.get('/query', {
        params: { q: query },
        headers: this.getHeaders(),
        baseURL: this.instanceUrl || undefined,
      })

      return response.data.records.map((record: any) => ({
        name: record.Destination__c,
        count: record.count,
      }))
    } catch (error) {
      console.error('Error fetching destinations:', error)
      return []
    }
  }
}

export const salesforceClient = new SalesforceClient()

export type { Villa, SearchParams }
