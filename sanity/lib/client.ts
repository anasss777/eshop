import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

const clientConfig = {
  projectId: "17aybt7u",
  dataset: "production",
  apiVersion: "2023-06-28",
  useCdn: true,
  token: process.env.SANITY_EDITOR_TOKEN
}

export default clientConfig;