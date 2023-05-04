import AuthContent from '../components/Auth/AuthContent';
import {createUser} from "../util/auth";
import {useContext, useState} from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {AuthContext} from "../store/auth-context";
import {Alert} from "react-native";

function SignupScreen() {
  const [isAuthing, setIsAuthing] = useState(false)

  const authCtx = useContext(AuthContext)
  const signup = async ({email, password}) => {
    setIsAuthing(true)
    try {
      const token = await createUser(email, password)
      authCtx.login(token)

    } catch (e) {
      Alert.alert('Authentication failed', "Could not register you. Check your inputs")
      setIsAuthing(false)
    }

  }

  if(isAuthing) {
    return <LoadingOverlay message={"creating"} />
  }

  return <AuthContent onAuthenticate={signup} />;
}

export default SignupScreen;
