
## Containers

Smart views that interract and manage UI Elements from `components` folder

## Context

Individual contexts for various providers. We define our state changes behaviors here.

## Pages

Dumb views that simply utilize different component containers are placed here. Any page routing also deails with components here.

## Store

Global context store. Merges all provider contexts and returns single global store

## Types

All application types and interfaces are declared here. `.d.ts` extension automatically includes these types across our app and we dont need to import these files