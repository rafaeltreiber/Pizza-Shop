import { api } from "@/lib/axios";

export interface GetDailyRevenueInPeriod {
  from?: Date
  to?: Date
}

export type GetDailyRevenueInPeriodReponse = {
  date: string
  receipt: number
}[]

export async function getDailyRevenueInPeriod({from, to}: GetDailyRevenueInPeriod) {
  const response = await api.get<GetDailyRevenueInPeriodReponse>('/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to
      }
    }
  )

  return response.data
}