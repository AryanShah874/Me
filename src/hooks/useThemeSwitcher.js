import React from 'react'

const useThemeSwitcher = () => {

  const prefersDarkMode = '(prefers-color-scheme: dark)';
  const userPref=window.localStorage.getItem('theme');

  const [mode, setMode] = React.useState(userPref || '');

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(prefersDarkMode);

    const handleChange=()=>{
        if(!userPref){
          let check=mediaQuery.matches ? 'dark' : 'light';

          setMode(check);
  
          if(check==='dark'){
            document.documentElement.classList.add('dark');
          }
          else{
            document.documentElement.classList.remove('dark');
          }
        }  
    }

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [userPref]);

  //update the theme in local storage
  React.useEffect(()=>{
    if(mode==='light'){
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
    else{
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
  }, [mode]);

  return (
    [mode, setMode]
  )
}

export default useThemeSwitcher