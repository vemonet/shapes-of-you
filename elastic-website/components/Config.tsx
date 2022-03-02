
export const BASE_URI = 'https://w3id.org/bio2kg/registry'

export const ELASTIC_URL = process.env.ELASTIC_URL || 'https://elastic.registry.bio2kg.org'
export const GRAPHQL_URL = process.env.GRAPHQL_URL || 'http://localhost:3000/api/graphql'


export const JSONLD_CONTEXT = {
    'preferredPrefix': 'http://identifiers.org/idot/preferredPrefix',
    'altPrefix': 'http://identifiers.org/idot/alternatePrefix',
    'providerBaseUri': 'http://rdfs.org/ns/void#uriRegexPattern',
    'alternativeBaseUri': 'http://w3id.org/bio2kg/vocabulary#alternativeBaseUri',
    'title': 'http://purl.org/dc/terms/title',
    'description': 'http://purl.org/dc/terms/description',
    'organization': 'http://purl.org/dc/terms/publisher',
    'keywords': 'http://www.w3.org/ns/dcat#keyword',
    'homepage': 'http://xmlns.com/foaf/0.1/homepage',
    'regex': 'http://identifiers.org/idot/identifierPattern',
    'exampleId': 'http://identifiers.org/idot/exampleIdentifier',
    'providerHtmlUrl': 'http://identifiers.org/idot/accessPattern',
    'identifiersPrefix': 'http://identifiersPrefix',
    'yearLastAccessible': 'http://yearLastAccessible',
    'waybackUrl': 'http://waybackUrl',
    'lastUpdated': 'http://lastUpdated',
    'lastUpdatedBy': 'http://lastUpdatedBy',
    'lastUpdatedByOrcid': 'http://lastUpdatedByOrcid',
    'exampleUrl': 'http://exampleUrl',
    'orcidUrl': 'http://orcidUrl',
}