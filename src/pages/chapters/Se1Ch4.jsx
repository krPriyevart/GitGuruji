import React from "react";
import { Link } from "react-router-dom";

const Se1Ch4 = () => {
  return (
    <div className="text-white p-8">
      <p className="text-3xl py-4">
        Chapter 4: Downloading, Installing & Configuring Git
      </p>
      <hr className="my-4" />

      <p className="text-xl py-4">
        {" "}
        Downloading Git: Preparing Your Magical Toolkit 🧙‍♂️
      </p>
      <p className="py-4">
        Before we can start practicing Git commands, we need to download and
        install Git on our systems. Whether you're using Windows or Linux, I've
        got you covered. Let’s get started!
      </p>

      <p className="text-lg py-4"> Downloading Git for Windows 😎</p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>Visit the Git Website:</b> Open your web browser and go to the
          official Git website:{" "}
          <a href="https://git-scm.com" className="text-blue-400 underline">
            git-scm.com
          </a>
          .
        </li>
        <li className="py-2">
          <b>Download Git:</b>
        </li>
        <ul className="list-disc list-inside ml-6">
          <li className="py-2">
            On the homepage, click on the <b>Download</b> button. The website
            will automatically detect your operating system and provide the
            appropriate download link.
          </li>
          <li className="py-2">
            Click the <b>Download for Windows</b> button to start downloading
            the installer. (Select 32-bit or 64-bit based upon your system and
            download the standalone installer).
          </li>
        </ul>
        <li className="py-2">
          <b>Run the Installer:</b>
        </li>
        <ul className="list-disc list-inside ml-6">
          <li className="py-2">
            Make sure you have{" "}
            <a
              href="https://code.visualstudio.com/"
              className="text-blue-400 underline"
            >
              Visual Studio Code
            </a>{" "}
            installed, we will be using it to edit files, throughout the
            tutorial.
          </li>
          <li className="py-2">
            Once the download is complete, open the installer file. A setup
            wizard will appear.
          </li>
          <li className="py-2">
            Follow the prompts to install Git. You can leave the default
            settings as they are or customize the installation according to your
            preferences.
          </li>
          <li className="py-2">
            Click <b>Next</b> through the setup screens:
          </li>
          <ul className="list-disc list-inside ml-6">
            <li className="py-2">
              Make sure to select <b>Visual Studio Code</b> as your default
              editor used by git.
            </li>
            <li className="py-2">
              Now, In the section of the name of the initial branch in the new
              repositories, set to override (type main there if needed), and
              then click next.
            </li>
            <li className="py-2">
              Also make sure credential helper is set to{" "}
              <b>Git Credential Manager</b>, then click next and so on. And
              finally, click <b>Install</b>.
            </li>
          </ul>
        </ul>
        <li className="py-2">
          <b>Finish Installation:</b>
        </li>
        <ul className="list-disc list-inside ml-6">
          <li className="py-2">
            After the installation is complete, click <b>Finish</b> to exit the
            setup wizard.
          </li>
          <li className="py-2">
            You can verify the installation by opening the Command Prompt (press
            `Win + R`, type `cmd`, and press Enter) and typing `git --version`.
            You should see the installed Git version.
          </li>
        </ul>
      </ol>

      <p className="text-lg py-4"> Downloading Git for Linux 🐧</p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>Open Terminal:</b> Press `Ctrl + Alt + T` to open the Terminal.
        </li>
        <li className="py-2">
          <b>Update Package Index:</b> Before installing Git, it’s a good idea
          to update the package index. Run the following command:
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>sudo apt update</code>
        </pre>
        <li className="py-2">
          <b>Install Git:</b> To install Git, run the following command:
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>sudo apt install git</code>
        </pre>
        <li className="py-2">
          <b>Verify Installation:</b> Once the installation is complete, verify
          it by running:
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git --version</code>
        </pre>
        <li className="py-2">You should see the installed git version.</li>
      </ol>

      <p className="py-4">
        Now that you’ve successfully downloaded and installed Git on your
        system, you’re one step closer to becoming a Git master. In the next
        section, we’ll configure Git to set up your identity, making sure your
        commits are properly attributed to you.
      </p>

      <p className="text-lg py-4">
        {" "}
        Enhancing the Look of Your Git Terminal on Windows 🌈
      </p>
      <p className="py-4">
        This is a special section to make your Git experience on Windows even
        more magical. Let’s transform the look of your Git terminal from drab to
        fab by customizing it with themes and settings. Ready to give your
        terminal a fresh new look? Let’s dive in!
      </p>

      <p className="text-lg py-4">
        Step-by-Step Guide to Enhancing Your Git Terminal 🎨
      </p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>Open Git Bash:</b>
        </li>
        <ul className="list-disc list-inside ml-6">
          <li className="py-2">
            On your desktop, right-click to open the context menu.
          </li>
          <li className="py-2">
            Select <b>Git Bash Here</b>. This will open the Git Bash terminal.
          </li>
        </ul>
        <li className="py-2">
          <b>Access Options:</b>
        </li>
        <ul className="list-disc list-inside ml-6">
          <li className="py-2">
            Right-click inside the Git Bash terminal window to open the context
            menu.
          </li>
          <li className="py-2">
            Select <b>Options</b> from the menu. This will open the Options
            window, where you can customize the look and feel of your terminal.
          </li>
        </ul>
        <li className="py-2">
          <b>Set the Theme to Dracula:</b>
        </li>
        <ul className="list-disc list-inside ml-6">
          <li className="py-2">
            In the Options window, navigate to the <b>Looks</b> section.
          </li>
          <li className="py-2">
            Find the <b>Themes</b> dropdown menu and select <b>Dracula</b>. This
            theme gives your terminal a sleek, dark appearance that's easy on
            the eyes.
          </li>
        </ul>
        <li className="py-2">
          <b>Increase Font Size:</b>
        </li>
        <ul className="list-disc list-inside ml-6">
          <li className="py-2">
            Still in the Options window, navigate to the <b>Text</b> section.
          </li>
          <li className="py-2">
            Adjust the <b>Font Size</b> to 14. This will make the text larger
            and more readable.
          </li>
        </ul>
        <li className="py-2">
          <b>Adjust Window Size:</b>
        </li>
        <ul className="list-disc list-inside ml-6">
          <li className="py-2">
            Navigate to the <b>Window</b> section.
          </li>
          <li className="py-2">
            You can set the <b>Columns</b> and <b>Rows</b> values manually. For
            example, set Columns to 93 and Rows to 25.
          </li>
          <li className="py-2">
            Alternatively, resize the open terminal window to your preferred
            size and click <b>Current Size</b> to capture these dimensions.
          </li>
        </ul>
        <li className="py-2">
          <b>Apply and Save:</b>
        </li>
        <ul className="list-disc list-inside ml-6">
          <li className="py-2">
            After making your adjustments, make sure to click <b>Apply</b> and
            then <b>Save</b> to ensure your changes take effect.
          </li>
        </ul>
      </ol>

      <p className="py-4">
        Now, your Git Bash terminal not only functions like a magical tool but
        looks the part too! Enjoy your new and improved coding environment, and
        stay tuned as we continue our journey. Up next, we’ll configure Git to
        set up your identity.
      </p>
      <hr className="my-4" />
      <div className="flex justify-between">
        <Link to="/section/1/chapter/3">Prev</Link>
        <Link to="/section/1/chapter/5">Next</Link>
      </div>
    </div>
  );
};

export default Se1Ch4;
