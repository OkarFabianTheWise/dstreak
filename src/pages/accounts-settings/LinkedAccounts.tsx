import AccountSidebar from '@/components/AccountSidebar'
import AlertModal from '@/components/ui/api-error-alert'
import ApiSuccessAlert from '@/components/ui/api-success-alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/contexts/AuthContext'
import { userRequests } from '@/utils/api/user.request'
import { useEffect, useState } from 'react'
import { FaDiscord, FaGithub, FaTelegram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'

const LinkedAccounts = () => {
  const authContext = useAuth()

  const { userProfile, fetchUserProfile } = useUserStore()
  const [errorMessage, setErrorMessage] = useState('')
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const [email, setEmail] = useState('')
  const [discord, setDiscord] = useState('')
  const [twitter, setTwitter] = useState('')
  const [telegram, setTelegram] = useState('')
  const [github, setGithub] = useState('')

  const handleEmailChange = (e: any) => setEmail(e.target.value)
  const handleDiscordChange = (e: any) => setDiscord(e.target.value)
  const handleTwitterChange = (e: any) => setTwitter(e.target.value)
  const handleTelegramChange = (e: any) => setTelegram(e.target.value)
  const handleGithubChange = (e: any) => setGithub(e.target.value)

  //get user profile
  useEffect(() => {
    fetchUserProfile()
  }, [fetchUserProfile])

  useEffect(() => {
    setEmail(userProfile?.email || '')
    setDiscord(userProfile?.discord || '')
    setTwitter(userProfile?.twitter || '')
    setTelegram(userProfile?.telegram || '')
    setGithub(userProfile?.github || '')
  }, [userProfile])

  const handleUpdate = async (label: string, value: string) => {
    if (value.trim() !== '') {
      const { success, message, data } = await userRequests.updateProfile({
        _label: label,
        value: value,
      })

      if (!success) {
        setErrorMessage(message)
        setIsAlertOpen(true)
        return
      }

      setIsSuccess(true)
      authContext.setUser(data)
    } else {
      setErrorMessage('Please enter a value before updating.')
      setIsAlertOpen(true)
    }
  }

  return (
    <div className='flex flex-col md:flex-row min-h-screen m-2 md:m-4 mt-4 md:mt-8 gap-3 md:gap-5 relative'>
      <AccountSidebar />

      <div className='flex-1'>
        <div className='h-screen bg-[#151515] py-5 md:py-10 px-4 md:px-20 rounded-xl md:rounded-3xl overflow-auto scrollbar-thin scrollbar-thumb-gray-500/40 scrollbar-track-[#202020] hover:scrollbar-thumb-gray-500/60 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full'>
          <h1 className='text-primary text-xl md:text-2xl font-medium mb-2'>
            Linked account
          </h1>
          <p className='text-muted-foreground text-sm md:text-base mb-6 md:mb-8'>
            Manage your Dev-streak profile
          </p>

          <div className='space-y-4 md:space-y-6 mt-6 md:mt-10 pt-5 border-t border-[gray]'>
            {/* Email Input */}
            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-4 rounded-2xl md:rounded-full border border-primary gap-3 sm:gap-0'>
              <div className='flex items-center gap-3 w-full sm:w-auto'>
                <IoMdMail className='text-lg md:text-xl' />
                <Input
                  type='email'
                  value={email}
                  onChange={handleEmailChange}
                  placeholder='Email address'
                  className='border-none bg-transparent focus-visible:ring-0 p-0 text-sm md:text-base'
                />
              </div>
              <Button
                variant='outline'
                className='rounded-full w-full sm:w-auto'
              >
                Update
              </Button>
            </div>

            <div className='space-y-3 md:space-y-4'>
              {/* Discord Input */}
              <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-4 rounded-2xl md:rounded-full border border-primary gap-3 sm:gap-0'>
                <div className='flex items-center gap-3 w-full sm:w-auto'>
                  <FaDiscord className='text-lg md:text-xl' />
                  <Input
                    type='text'
                    value={discord}
                    onChange={handleDiscordChange}
                    placeholder='Discord username'
                    className='border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0 text-sm md:text-base'
                  />
                </div>
                <Button
                  variant='outline'
                  onClick={() => handleUpdate('discord', discord)}
                  className='rounded-full w-full sm:w-auto'
                >
                  Update
                </Button>
              </div>

              {/* Twitter Input */}
              <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-4 rounded-2xl md:rounded-full border border-primary gap-3 sm:gap-0'>
                <div className='flex items-center gap-3 w-full sm:w-auto'>
                  <FaXTwitter className='text-lg md:text-xl' />
                  <Input
                    type='text'
                    value={twitter}
                    onChange={handleTwitterChange}
                    placeholder='X profile URL'
                    className='border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0 text-sm md:text-base'
                  />
                </div>
                <Button
                  variant='outline'
                  onClick={() => handleUpdate('twitter', twitter)}
                  className='rounded-full w-full sm:w-auto'
                >
                  Update
                </Button>
              </div>

              {/* Telegram Input */}
              <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-4 rounded-2xl md:rounded-full border border-primary gap-3 sm:gap-0'>
                <div className='flex items-center gap-3 w-full sm:w-auto'>
                  <FaTelegram className='text-lg md:text-xl' />
                  <Input
                    type='text'
                    value={telegram}
                    onChange={handleTelegramChange}
                    placeholder='Telegram username'
                    className='border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0 text-sm md:text-base'
                  />
                </div>
                <Button
                  variant='outline'
                  onClick={() => handleUpdate('telegram', telegram)}
                  className='rounded-full w-full sm:w-auto'
                >
                  Update
                </Button>
              </div>

              {/* GitHub Input */}
              <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-4 rounded-2xl md:rounded-full border border-primary gap-3 sm:gap-0'>
                <div className='flex items-center gap-3 w-full sm:w-auto'>
                  <FaGithub className='text-lg md:text-xl' />
                  <Input
                    value={github}
                    onChange={handleGithubChange}
                    placeholder='GitHub username'
                    className='border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0 text-sm md:text-base'
                  />
                </div>
                <Button
                  onClick={() => handleUpdate('github', github)}
                  variant='outline'
                  className='rounded-full w-full sm:w-auto'
                >
                  Update
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AlertModal
        message={errorMessage}
        isOpen={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
      />

      <ApiSuccessAlert
        message='Your action was completed successfully!'
        isOpen={isSuccess}
        onClose={() => setIsSuccess(false)}
      />
    </div>
  )
}

export default LinkedAccounts
