import AuthContent from '../components/Auth/AuthContent';
import {useContext, useState} from "react";
import {createUser, loginUser} from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {Alert} from "react-native";
import {AuthContext} from "../store/auth-context";

function LoginScreen() {
  const [isAuthing, setIsAuthing] = useState(false)
  const authCtx = useContext(AuthContext)
  const login = async ({email, password}) => {
    setIsAuthing(true)
    try {
      const token  = await loginUser(email, password)
      authCtx.login(token)
    } catch (e) {
      Alert.alert('Authentication failed', "Couldn't login, please check your credentials")
      setIsAuthing(false)
    }

  }

  if(isAuthing) {
    return <LoadingOverlay message={"loggining"} />
  }

  return <AuthContent isLogin onAuthenticate={login} />;
}

export default LoginScreen;
