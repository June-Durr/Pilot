export const Login = () => {
  return (
    <body>
    <div class="font-sans text-gray-900 antialiased">
        <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-[#e0f2fe]">
            <div>
                <a href="/">
                    <h2 class="font-bold text-3xl">LOREM <span class="bg-[#7dd3fc] text-white px-2 rounded-md">IPSUM</span></h2>
                </a>
            </div>

            <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <form method="POST" action="{{ route('login') }}">

                    <div class="py-8">
                        <center>
                            <span class="text-2xl font-semibold">Log In</span>
                        </center>
                    </div>

                    <div>
                        <label class="block font-medium text-sm text-gray-700" for="email" value="Email" />
                        <input type='email' 
                            name='email'
                            placeholder='Email'
                            class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#7dd3fc]" />                        
                    </div>


                    <div class="mt-4">
                        <label class="block font-medium text-sm text-gray-700" for="password" value="Password" />
                        <div class="relative">
                            <input id="password" type="password" name="password" placeholder="Password" required autocomplete="current-password" class = 'w-full rounded-md py-2.5 px-4 border text-sm outline-[#7dd3fc]' />

                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                <button type="button" id="togglePassword" class="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" >
                                   </svg>                 
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="block mt-4">
                        <label for="remember_me" class="flex items-center">
                            <input type="checkbox" id="remember_me" name="remember" class = 'rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500' />
                            <span class="ms-2 text-sm text-gray-600">Remember Me</span>
                        </label>
                    </div>

                    <div class="flex items-center justify-end mt-4">
                            <a class="hover:underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="{{ route('password.request') }}">
                                Forgot your password?
                            </a>

                        <button class = 'ms-4 inline-flex items-center px-4 py-2 bg-[#7dd3fc] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-800 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150'>
                            Sign In
                        </button>

                    </div>
                    
                </form>                
            </div>
        </div>
    </div>  
</body>
  )
}
