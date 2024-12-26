export default defineNuxtRouteMiddleware((to, from) => {

  const token = useCookie('authToken').value

  const exceptions = ['/login', '/register'];

  // Skip middleware for exception routes
  if (exceptions.includes(to.path)) {
    return;
  }

  if (!token) {
    return navigateTo('/login')
  }

  // Optional: Validate token expiration if necessary
  // try {
  //   const payload = JSON.parse(atob(token.split('.')[1]));
  //   const isExpired = payload.exp * 1000 < Date.now();
  //   if (isExpired) {
  //     useCookie('auth_token').value = null; // Clear cookie
  //     return redirect('/login');
  //   }
  // } catch (error) {
  //   useCookie('auth_token').value = null; // Clear cookie on error
  //   return redirect('/login');
  // }
})
