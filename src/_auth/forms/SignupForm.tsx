
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignupValidation } from "@/lib/validation"
import {z} from 'zod'
import Loader from "@/components/shared/Loader"
 



const SignupForm = () => {
  const isLoading = false;
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email:"",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SignupValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
       <Form {...form}>

      <div className='sm:w-420 flex-center flex-col'>
        <img src="/assets/images/logo.png" alt="logo" className="hover:scale-125 transition-hover duration-200 " />
        <label className="font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Seizure</label>

        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-3">Create a new account</h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">Enter account details</p>

      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-7 w-full mt-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type='text' className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type='text' className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="shad-button_primary">
          {isLoading?(
            <div className="flex-center gap-2">
              <Loader/>Loading...
            </div>
          ):"Sign up"}
        </Button>
      </form>
      </div>
    </Form>
  )
}

export default SignupForm