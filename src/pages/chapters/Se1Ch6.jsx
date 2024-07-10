import React from 'react';

const Se1Ch6 = () => {
  return (
    <div className='text-white p-8'>
      <p className='text-3xl py-4'>Chapter 6: Basic Linux and Windows Commands for Working with Git</p>
      <hr className='my-4' />

      <p className='py-4'>
        Hello, I'm ready to introduce you to some basic Linux and Windows commands that will be your companions as you work with Git. These commands are like magical spells that help you navigate and manage your files and directories efficiently. Let's learn these foundational commands together!
      </p>

      <p className='text-xl py-4'>Basic Commands: Your First Spells 🧙‍♂️</p>
      <p className='py-4'>
        Hello, adventurers! Elated here, ready to introduce you to some basic Linux and Windows commands that will be your companions as you work with Git. These commands are like magical spells that help you navigate and manage your files and directories efficiently. Let's learn these foundational commands together!
      </p>

      <p className='text-lg py-4'>Creating a File with `touch`</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Create a File:</b></li>
        <ul className='list-disc list-inside ml-6'>
          <li className='py-2'>Open your terminal (Git Bash on Windows or Terminal on Linux).</li>
          <li className='py-2'>Use the `touch` command to create a new file named `1.txt`:</li>
          <pre className='bg-gray-800 text-white p-2 rounded'><code>touch 1.txt</code></pre>
        </ul>
      </ol>

      <p className='text-lg py-4'>Creating a Directory with `mkdir`</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Create a Directory:</b></li>
        <ul className='list-disc list-inside ml-6'>
          <li className='py-2'>Use the `mkdir` command to create a new directory named `roll_no`:</li>
          <pre className='bg-gray-800 text-white p-2 rounded'><code>mkdir roll_no</code></pre>
        </ul>
      </ol>

      <p className='text-lg py-4'>Navigating with `cd`</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Change Directory:</b></li>
        <ul className='list-disc list-inside ml-6'>
          <li className='py-2'>Use the `cd` command to navigate to the `roll_no` directory:</li>
          <pre className='bg-gray-800 text-white p-2 rounded'><code>cd roll_no</code></pre>
        </ul>
      </ol>

      <p className='text-lg py-4'>Moving Files with `mv`</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Move a File:</b></li>
        <ul className='list-disc list-inside ml-6'>
          <li className='py-2'>Use the `mv` command to move `1.txt` to the `roll_no` directory:</li>
          <pre className='bg-gray-800 text-white p-2 rounded'><code>mv ../1.txt .</code></pre>
        </ul>
      </ol>

      <p className='text-lg py-4'>Copying Files with `cp`</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Copy a File:</b></li>
        <ul className='list-disc list-inside ml-6'>
          <li className='py-2'>Use the `cp` command to create a copy of `1.txt` in the same directory:</li>
          <pre className='bg-gray-800 text-white p-2 rounded'><code>cp 1.txt 1_copy.txt</code></pre>
        </ul>
      </ol>

      <p className='text-lg py-4'>Checking Your Location with `pwd`</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Print Working Directory:</b></li>
        <ul className='list-disc list-inside ml-6'>
          <li className='py-2'>Use the `pwd` command to display your current directory path:</li>
          <pre className='bg-gray-800 text-white p-2 rounded'><code>pwd</code></pre>
        </ul>
      </ol>

      <p className='text-lg py-4'>Clearing the Terminal with `clear` or `Ctrl + L`</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Clear Terminal:</b></li>
        <ul className='list-disc list-inside ml-6'>
          <li className='py-2'>Use the `clear` command or press `Ctrl + L` to clear your terminal screen:</li>
          <pre className='bg-gray-800 text-white p-2 rounded'><code>clear</code></pre>
        </ul>
      </ol>

      <p className='text-lg py-4'>Displaying File Content with `cat`</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>View File Content:</b></li>
        <ul className='list-disc list-inside ml-6'>
          <li className='py-2'>Use the `cat` command to display the content of `1.txt`:</li>
          <pre className='bg-gray-800 text-white p-2 rounded'><code>cat 1.txt</code></pre>
        </ul>
      </ol>

      <p className='text-xl py-4'>Using VS Code</p>
      <p className='py-4'>
        We'll be using VS Code for editing files, which is user-friendly and powerful. However, sometimes you might accidentally open a file in Vim. If that happens, you can exit Vim by typing `:q!` and pressing Enter. If you need more help with Vim or any other commands, don't hesitate to search online or Google your query.
      </p>

      <p className='py-4'>
        These basic commands will help you navigate and manage your files while working with Git. Don’t worry if you don’t remember all of them right away—you’ll get more comfortable with practice.
      </p>
      <hr className='my-4' />
    </div>
  );
};

export default Se1Ch6;
