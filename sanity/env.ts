export const apiVersion =
  process.env.SANITY_STUDIO_NEXT_PUBLIC_SANITY_API_VERSION || '2023-06-27'

export const dataset = assertValue(
  process.env.SANITY_STUDIO_NEXT_PUBLIC_SANITY_DATASET || "production",
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.SANITY_STUDIO_NEXT_PUBLIC_SANITY_PROJECT_ID || "17aybt7u",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
