import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Intro() {
  return (
    <section className='py-32'>
      <div className='mx-auto w-fit space-y-5'>
        <div className='flex justify-center'>
          <Button variant={"secondary"} className='gap-2' asChild>
            <Link href='https://github.com/10-ui/saas-tenui'>
              <svg
                width='25'
                height='24'
                viewBox='0 0 25 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M12.2135 0C5.45975 0 0 5.5 0 12.3043C0 17.7433 3.49825 22.3473 8.35125 23.9768C8.958 24.0993 9.18025 23.712 9.18025 23.3863C9.18025 23.101 9.16025 22.1233 9.16025 21.1045C5.76275 21.838 5.05525 19.6378 5.05525 19.6378C4.50925 18.2118 3.70025 17.8453 3.70025 17.8453C2.58825 17.0915 3.78125 17.0915 3.78125 17.0915C5.01475 17.173 5.662 18.3545 5.662 18.3545C6.75375 20.2285 8.513 19.699 9.22075 19.373C9.32175 18.5785 9.6455 18.0285 9.98925 17.723C7.2795 17.4378 4.4285 16.3785 4.4285 11.6523C4.4285 10.3078 4.9135 9.20775 5.682 8.35225C5.56075 8.04675 5.136 6.7835 5.8035 5.09275C5.8035 5.09275 6.83475 4.76675 9.16 6.35575C10.1555 6.08642 11.1822 5.9494 12.2135 5.94825C13.2447 5.94825 14.296 6.091 15.2667 6.35575C17.5922 4.76675 18.6235 5.09275 18.6235 5.09275C19.291 6.7835 18.866 8.04675 18.7447 8.35225C19.5335 9.20775 19.9985 10.3078 19.9985 11.6523C19.9985 16.3785 17.1475 17.4173 14.4175 17.723C14.8625 18.11 15.2465 18.8433 15.2465 20.0045C15.2465 21.6545 15.2265 22.9788 15.2265 23.386C15.2265 23.712 15.449 24.0993 16.0555 23.977C20.9085 22.347 24.4067 17.7433 24.4067 12.3043C24.4267 5.5 18.947 0 12.2135 0Z'
                  fill='#24292F'
                />
              </svg>
              Github Repository
            </Link>
          </Button>
        </div>
        <h2 className='text-center text-7xl font-bold'>
          A new Saas project
          <br />
          for all web developers.
        </h2>
        <p className='text-center text-xl text-primary/50'>
          Give you a new value of experience with the completely new Saas.
          <br />
          {`Come on, let's get started now!`}
        </p>
        <div className='flex justify-center gap-5'>
          <Button>Get Started</Button>
          <Button variant='outline'>Documentation</Button>
        </div>
      </div>
    </section>
  );
}
