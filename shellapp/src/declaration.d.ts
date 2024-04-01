
declare module '*.png';

declare module "app1/CounterAppOne" {
	const CounterAppOne: React.ComponentType;
	export default CounterAppOne;
}


declare module "app1/Hoctest" {
	interface HoctestProps {
		children: React.ReactElement;
	}
	
	const Hoctest: React.FC<HoctestProps>;
	export default Hoctest;
}

declare module "authapp/Auth" {
	const Counter: React.ComponentType;
	export default Counter;
}
declare module "authapp/Login" {
	const Login: React.ComponentType;
	export default Login;
}
declare module "authapp/Register" {
	const Register: React.ComponentType;
	export default Register;
}

declare module "styleguide/BasicCard" {
	const BasicCard: React.ComponentType;
	export default BasicCard;
}

declare module "styleguide/theme" {
	const theme:any 
	export default theme; 
}

declare module "styleguide/Layout" {
	const Layout: React.ComponentType;
	export default Layout;
}

declare module "services/customHooksSR" {
	export function useCustomHook1():string
	export function useCustomHook2():string
}

declare module "services/apollo_SR" {
	import { ApolloClient, DocumentNode, NormalizedCacheObject } from "@apollo/client";
	export const client: ApolloClient<NormalizedCacheObject>;
	export const GET_CONTINENTS: DocumentNode
}
declare module "services/ProtectedRoute" {
	const ProtectedRoute: React.ComponentType
	export default ProtectedRoute;
}