import { Button } from '@chakra-ui/react';
import { useWalletLogin } from '@lens-protocol/react-web';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

const LoginButton: React.FC = () => {
  const { execute: login, error: loginError, isPending: isLoginPending } = useWalletLogin();

  const { isConnected } = useAccount();
  const { disconnectAsync } = useDisconnect();

  const { connectAsync } = useConnect({
    connector: new InjectedConnector(),
  });

  const onLoginClick = async () => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { connector } = await connectAsync();

    if (connector instanceof InjectedConnector) {
      const signer = await connector.getSigner({chainId:80001});
      await login(signer);
    }
  };
 
  return (
    <div>
      {/* {loginError && <p>{loginError}</p>} */}
      <Button disabled={isLoginPending} onClick={onLoginClick} backgroundColor={'rgb(171 254 44)'} color={'0 80 30'} width={'full'} mt={'20px'}>Sign in with lens</Button>
    </div>
  );
}

export default LoginButton
