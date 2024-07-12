import React from "react";
import { Link } from "react-router-dom";

const Se1Ch3 = () => {
  return (
    <div className="text-white p-8">
      <p className="text-3xl py-4">
        Chapter 3: Creating Your First Repository: Learning_Git
      </p>
      <hr className="my-4" />

      <p className="text-xl py-4">
        3.1 Creating a New Repository: Your First Step into the Adventure 🌟
      </p>
      <p className="py-4">
        Now that you have your passport to the magical kingdom of GitHub, it's
        time to create your very first repository. Think of a repository as a
        magical chest where you store all your treasures (code and projects).
        Let’s create a new repository and name it <b>Learning_Git</b>. Ready?
        Let’s get started!
      </p>

      <p className="text-xl py-4">
        3.2 Step-by-Step Guide to Creating a New Repository 🧙‍♂️
      </p>
      <p className="py-4">
        Creating a repository on GitHub is a breeze. Follow these simple steps
        to create your first repository named <b>Learning_Git</b>:
      </p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>Sign In to GitHub:</b> Make sure you’re signed in to your GitHub
          account. If you’re not, go to{" "}
          <a href="https://github.com" className="text-blue-400 underline">
            github.com
          </a>{" "}
          and log in with your credentials.
        </li>
        <li className="py-2">
          <b>Navigate to Your Dashboard:</b> Once logged in, you’ll be taken to
          your GitHub dashboard. Here, you can see all your repositories, stars,
          and activity.
        </li>
        <li className="py-2">
          <b>Create a New Repository:</b>
        </li>
        <ul className="list-disc list-inside ml-6">
          <li className="py-2">
            Click the <b>+</b> icon in the upper right corner of the page.
          </li>
          <li className="py-2">
            Select <b>New repository</b> from the dropdown menu.
          </li>
        </ul>
        <li className="py-2">
          <b>Name Your Repository:</b>
        </li>
        <ul className="list-disc list-inside ml-6">
          <li className="py-2">
            <b>Repository Name:</b> Enter <code>Learning_Git</code> as the name
            of your new repository. This will be the title of your magical
            chest.
          </li>
          <li className="py-2">
            <b>Description (optional):</b> You can add a brief description of
            your repository. For example, "A repository for learning and
            practicing Git."
          </li>
        </ul>
        <li className="py-2">
          <b>Repository Settings:</b>
        </li>
        <ul className="list-disc list-inside ml-6">
          <li className="py-2">
            <b>Public or Private:</b> Choose public for now. It simply says that
            the repository (repo) is visible to everyone.
          </li>
          <li className="py-2">
            <b>Initialize with a README:</b> Check this box to include a README
            file in your repository. However, we are not going to do that in
            this tutorial so, keep the box unchecked.
          </li>
        </ul>
        <li className="py-2">
          <b>Create Repository:</b> Once you’ve filled in the details, click the{" "}
          <b>Create repository</b> button. Congratulations! You’ve just created
          your first repository named <code>Learning_Git</code>.
        </li>
      </ol>

      <hr className="my-4" />

      <p className="text-xl py-4">Note: Preparing for the Journey Ahead 🛠️</p>
      <p className="py-4">
        Alright, adventurers! Elated here, with an exciting update. Now that
        we've created our GitHub account and our very first repository, it's
        time to dive into the heart of our journey: learning Git. We'll start by
        downloading Git on our system and practicing locally. This hands-on
        approach will help us grasp the fundamentals of version control.
      </p>
      <p className="py-4">
        Once we're comfortable with the basics, we'll explore how to use Git and
        GitHub together to manage and share our projects seamlessly. So, get
        ready to roll up your sleeves and immerse yourself in the magical world
        of Git! 🚀
      </p>
      <hr className="my-4" />
      <div className="flex justify-between">
        <Link to="/section/1/chapter/2">Prev</Link>
        <Link to="/section/1/chapter/4">Next</Link>
      </div>
    </div>
  );
};

export default Se1Ch3;
