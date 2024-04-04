declare module "*.png";

declare module "app1/CounterAppOne" {
  const CounterAppOne: React.ComponentType;
  export default CounterAppOne;
}

declare module "app1/Subscriber" {
  const Subscriber: React.ComponentType;
  export default Subscriber;
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
  const theme: any;
  export default theme;
}

declare module "eventpublisher/DemoPubSub" {
  const DemoPubSub: React.ComponentType;
  export default DemoPubSub;
}
declare module "eventpublisher/Publisher" {
  const Publisher: React.ComponentType;
  export default Publisher;
}

declare module "services/customHooksSR" {
  export function useCustomHook1(): string;
  export function useCustomHook2(): string;
}

declare module "services/apollo_SR" {
  import {
    ApolloClient,
    DocumentNode,
    NormalizedCacheObject,
  } from "@apollo/client";
  export const client: ApolloClient<NormalizedCacheObject>;
  export const GET_CONTINENTS: DocumentNode;
}
