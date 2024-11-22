import { customers } from './data'
import { Customer } from './types'

export const customerApi = async (customerId: string): Promise<Customer> => {
  const customerFromData = customers.find(
    (customer) => customer.id === customerId
  )

  const randomDelay = Math.floor(Math.random() * 800) + 200
  await new Promise((resolve) => setTimeout(resolve, randomDelay))

  if (typeof customerFromData === 'undefined') {
    throw new Error('Customer not found')
  }

  return customerFromData
}
