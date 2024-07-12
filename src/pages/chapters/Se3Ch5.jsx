import React from "react";

const Se3Ch5 = () => {
  return (
    <div className="text-white p-8">
      <p className="text-3xl py-4">Chapter 5: Git Hooks</p>
      <hr className="my-4" />

      <p className="text-xl py-4"> Introduction to Git Hooks</p>
      <p className="py-4">
        Git hooks are customizable scripts triggered by specific Git events.
        They are like alarms that go off when certain actions occur, allowing
        you to automate tasks such as code validation, testing, or deployment.
      </p>

      <p className="text-xl py-4"> Why Use Git Hooks?</p>
      <ul className="list-disc list-inside ml-6">
        <li className="py-2">
          <b>Automation:</b> Automate repetitive tasks like linting, testing, or
          deployment on specific Git events.
        </li>
        <li className="py-2">
          <b>Enforcement:</b> Enforce code quality standards or policies before
          allowing commits or pushes.
        </li>
        <li className="py-2">
          <b>Integration:</b> Integrate with CI/CD pipelines or external tools
          for continuous integration and delivery.
        </li>
      </ul>

      <p className="text-xl py-4"> The Commands: Harnessing Git Hooks 🎣</p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>Types of Git Hooks:</b>
        </li>
        <p className="py-2">
          Git provides hooks for various actions, stored in{" "}
          <code>.git/hooks</code> directory.
        </p>

        <li className="py-2">
          <b>Creating a Git Hook:</b>
        </li>
        <p className="py-2">
          Create executable scripts named after Git hook events (e.g.,{" "}
          <code>pre-commit</code>, <code>post-merge</code>).
        </p>

        <li className="py-2">
          <b>Sample Use Cases:</b>
        </li>
        <ul className="list-disc list-inside ml-6">
          <li className="py-2">
            <b>Pre-Commit Hook:</b> Validate code formatting before allowing
            commits.
          </li>
          <li className="py-2">
            <b>Pre-Push Hook:</b> Run tests to ensure code quality before
            pushing to the remote repository.
          </li>
          <li className="py-2">
            <b>Post-Checkout Hook:</b> Automatically update dependencies after
            switching branches.
          </li>
        </ul>
      </ol>

      <p className="text-xl py-4"> Practical Example: Using Git Hooks 🌟</p>
      <p className="py-4">
        Imagine you want to enforce code formatting using a pre-commit hook.
        Here’s how you can set it up:
      </p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>Create the Hook Script:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>
            #!/bin/bash linting_command # Replace with your code linting or
            formatting command
          </code>
        </pre>
        <p className="py-2">Make it executable:</p>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>chmod +x .git/hooks/pre-commit</code>
        </pre>

        <li className="py-2">
          <b>Test the Hook:</b>
        </li>
        <p className="py-2">
          Make a change and attempt to commit. The hook script will run before
          committing.
        </p>

        <li className="py-2">
          <b>Customize for Your Workflow:</b>
        </li>
        <p className="py-2">
          Adapt hooks to fit your team’s specific requirements or workflow
          automation needs.
        </p>
      </ol>

      <p className="text-xl py-4"> Important Notes</p>
      <ul className="list-disc list-inside ml-6">
        <li className="py-2">
          <b>Local to Repository:</b> Hooks are local to each Git repository and
          not shared.
        </li>
        <li className="py-2">
          <b>Customization:</b> Tailor hooks to fit your team’s workflow and
          coding standards.
        </li>
      </ul>

      <p className="py-4">
        By mastering Git hooks, you can automate tasks, enforce standards, and
        integrate seamlessly with your development workflow, improving
        productivity and code quality.
      </p>

      <hr className="my-4" />
      <div className="flex justify-between">
        <a href="/section/3/chapter/4">Prev</a>
        <a href="/section/3/chapter/6">Next</a>
      </div>
    </div>
  );
};

export default Se3Ch5;
