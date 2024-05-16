import { useState } from 'react';

const useAuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthForm = () => {
    setIsLogin((prev) => !prev);
  }

  return { isLogin, toggleAuthForm };
}

export default useAuthForm;
