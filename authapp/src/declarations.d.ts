declare module '*.png';

declare module "styleguide/theme" {
	const theme:any 
	export default theme; 
}

declare module "services/apollo_SR" {
	import { ApolloClient, DocumentNode, NormalizedCacheObject } from "@apollo/client";
	export const client: ApolloClient<NormalizedCacheObject>;
	export const GET_CONTINENTS: DocumentNode
}