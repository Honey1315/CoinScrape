import swaggerJsdoc from 'swagger-jsdoc';
import config from './config';

const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CoinScrape by Honey Khatri',
      version: '1.0.0',
      description: 'Backend for CoinScrape Project',
      contact: {
        name: 'Honey Khatri',
        email: 'honeykhatri10@gmail.com',
      },
    },
    servers: [
      {
        url: `http://localhost:${config.port || 3000}`,
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        CoinData: {
          type: 'object',
          properties: {
            coinId: {
              type: 'string',
            },
            price: {
              type: 'number',
            },
            marketCap: {
              type: 'number',
            },
            '24hChange': {
              type: 'number',
            },
          },
        },
        StandardDeviation: {
          type: 'object',
          properties: {
            deviation: {
              type: 'number',
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes.ts'],
};

export const swaggerDocs = swaggerJsdoc(swaggerOptions);
