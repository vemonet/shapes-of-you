import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


const ApiDocs = () => {

    const openapiSchema = {
        "openapi": "3.0.2",
        "info": {
            "title": "Bio2KG Registry API",
            "description": "RESTful API to access a registry of datasets of relevance to the life sciences. The registry contains dataset metadata, and assigns namespaces, identifier patterns, and URL templates for link outs.",
            "contact": {
                "name": "Vincent Emonet",
                "email": "vincent.emonet@gmail.com"
            },
            "license": {
                "name": "MIT license",
                "url": "https://github.com/bio2kg/bio2kg-registry/blob/main/LICENSE"
            },
            "version": "0.1.0"
        },
        "paths": {
            "/resource/{id}": {
                "get": {
                    "tags": [
                        "Resources"
                    ],
                    "summary": "Get a resource",
                    //   "operationId": "show_evaluation_rest_evaluations__id__get",
                    "parameters": [
                        {
                            "required": true,
                            "schema": {
                                "title": "Id",
                                "type": "string",
                                "example": "drugbank"
                            },
                            "name": "id",
                            "in": "path"
                        },
                    ],
                    "responses": {
                        "200": {
                            "description": "Get a resource",
                            "content": {
                                "application/ld+json": {
                                    "schema": {
                                        "title": "Registry resource",
                                        "type": "object"
                                    }
                                },
                                "application/json": {
                                    "schema": {
                                        "title": "Registry resource",
                                        "type": "object"
                                    }
                                }
                            }
                        },
                        "422": {
                            "description": "Validation Error",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/HTTPValidationError"
                                    }
                                }
                            }
                        }
                    }
                }
            },
        },
        "components": {
            "schemas": {
                "ValidationError": {
                    "title": "ValidationError",
                    "required": [
                        "loc",
                        "msg",
                        "type"
                    ],
                    "type": "object",
                    "properties": {
                        "loc": {
                            "title": "Location",
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        "msg": {
                            "title": "Message",
                            "type": "string"
                        },
                        "type": {
                            "title": "Error Type",
                            "type": "string"
                        }
                    }
                },
                "HTTPValidationError": {
                    "title": "HTTPValidationError",
                    "type": "object",
                    "properties": {
                        "detail": {
                            "title": "Detail",
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/ValidationError"
                            }
                        }
                    }
                },
            }
        }
    }

    return (
        <SwaggerUI spec={openapiSchema} />
    )
}

export default ApiDocs