// pages/_app.tsx
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from '../auth/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const { store, props } = wrapper.useWrappedStore(pageProps);
    console.log("MyApp");
    return (
        <Provider store={store}>
            <Component {...props} />
        </Provider>
    );
};

export default wrapper.withRedux(MyApp);
