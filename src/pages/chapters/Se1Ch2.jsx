import React from 'react';

const Se1Ch2 = () => {
  return (
    <div className='text-white p-8'>
      <p className='text-3xl py-4'>Chapter 2: Creating an Account on GitHub</p>
      <hr className='my-4' />

      <p className='text-xl py-4'> Creating an Account on GitHub: Your Passport to the Magical Kingdom 🏰</p>
      <p className='py-4'>
        Hello again, adventurers! Elated here. Before we dive into the wonders of Git, we need to set up our base in the magical kingdom of GitHub. Think of this as getting your passport to a realm where all your projects will come to life. Ready to get started? Let’s go!
      </p>

      <p className='text-xl py-4'> Step-by-Step Guide to Creating a GitHub Account 🧙‍♂️</p>
      <p className='py-4'>
        Creating an account on GitHub is simple and straightforward. Let’s walk through the process together:
      </p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Visit the GitHub Website:</b> Open your favorite web browser and go to <a href='https://github.com' className='text-blue-400 underline'>github.com</a>. You’ll see a welcoming homepage inviting you to join the GitHub community.</li>
        <li className='py-2'><b>Sign Up:</b> Enter your email & click on the <b>Sign-Up</b> button. You’ll be asked to provide some basic information to create your account:</li>
        <ul className='list-disc list-inside ml-6'>
          <li className='py-2'><b>Username:</b> Choose a unique and memorable username. This will be your identity on GitHub.</li>
          <li className='py-2'><b>Email Address:</b> Enter a valid email address. This will be used for account verification and notifications.</li>
          <li className='py-2'><b>Password:</b> Create a strong password to keep your account secure. Make sure it’s something you’ll remember!</li>
        </ul>
        <li className='py-2'><b>Verify Your Account:</b> GitHub may ask you to complete a quick puzzle to verify that you’re not a robot. Once that’s done, you’ll receive a verification email. Open the email and click on the verification link to activate your account.</li>
        <li className='py-2'><b>Customize Your Profile:</b> After verifying your account, you’ll be taken to your new GitHub dashboard. Here, you can customize your profile:</li>
        <ul className='list-disc list-inside ml-6'>
          <li className='py-2'><b>Profile Picture:</b> Upload a profile picture or avatar. This helps others recognize you in the community.</li>
          <li className='py-2'><b>Bio:</b> Write a brief bio about yourself. You can mention your interests, skills, and what you’re working on.</li>
          <li className='py-2'><b>Location:</b> Add your location if you’d like. This is optional.</li>
        </ul>
        <li className='py-2'><b>Explore GitHub:</b> Congratulations! You now have your very own GitHub account. Take a moment to explore the interface:</li>
        <ul className='list-disc list-inside ml-6'>
          <li className='py-2'><b>Repositories:</b> This is where your projects will live.</li>
          <li className='py-2'><b>Stars:</b> You can star repositories you find interesting.</li>
          <li className='py-2'><b>Followers/Following:</b> Connect with other developers by following them and gaining followers.</li>
        </ul>
      </ol>

      <p className='text-xl py-4'> Why Create a GitHub Account?</p>
      <p className='py-4'>
        Creating a GitHub account is like unlocking the door to endless possibilities. Here’s why it’s so important:
      </p>
      <ul className='list-disc list-inside ml-6'>
        <li className='py-2'><b>Central Hub:</b> GitHub serves as the central hub for all your coding projects, making it easy to manage and showcase your work.</li>
        <li className='py-2'><b>Collaboration:</b> You can collaborate with developers from around the world, contributing to open-source projects and learning from others.</li>
        <li className='py-2'><b>Visibility:</b> Having a GitHub account boosts your visibility in the developer community. Potential employers and collaborators can see your work and contributions.</li>
        <li className='py-2'><b>Backup:</b> Your code and projects are safely backed up on the cloud, accessible from anywhere at any time.</li>
      </ul>

      <p className='py-4'>
        Now that you have your passport to the magical kingdom of GitHub, you’re ready to embark on your coding adventures. In the next chapter, we’ll start our journey by diving into the basics of version control with Git and creating your first repository. 🚀
      </p>
      <hr className='my-4' />
    </div>
  );
};

export default Se1Ch2;
