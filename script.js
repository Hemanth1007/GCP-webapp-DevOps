const commands = [
  {
    name: "git init",
    description: "Create an empty Git repository or reinitialize an existing one.",
    scenarios: [
      {
        title: "Start a new project",
        command: "git init",
        explanation: "Create a new repository in the current folder by creating a .git directory."
      },
      {
        title: "Reinitialize existing repository",
        command: "git init .",
        explanation: "Re-create the .git folder if it was deleted."
      },
      {
        title: "Create a bare repository",
        command: "git init --bare myrepo.git",
        explanation: "Creates a repository intended to be a remote repository."
      }
    ]
  },
  {
    name: "git clone",
    description: "Copy an existing repository to a new location.",
    scenarios: [
      {
        title: "Clone full history",
        command: "git clone https://github.com/user/project.git",
        explanation: "Creates a local copy including all branches."
      },
      {
        title: "Shallow clone",
        command: "git clone --depth 1 https://github.com/user/project.git",
        explanation: "Downloads only the latest snapshot, reducing data transfer."
      }
    ]
  },
  {
    name: "git commit",
    description: "Record changes to the repository.",
    scenarios: [
      {
        title: "Commit staged changes",
        command: "git commit -m \"Message\"",
        explanation: "Stores the staged snapshot with a message."
      },
      {
        title: "Amend previous commit",
        command: "git commit --amend",
        explanation: "Replaces the last commit with new changes and message."
      }
    ]
  },
  {
    name: "git merge",
    description: "Join two or more development histories together.",
    scenarios: [
      {
        title: "Fast-forward merge",
        command: "git merge feature",
        explanation: "Moves the pointer forward when no divergent commits exist."
      },
      {
        title: "Merge with conflicts",
        command: "git merge feature",
        explanation: "When both branches modify the same lines, Git asks to resolve conflicts before committing."
      }
    ]
  },
  {
    name: "git rebase",
    description: "Reapply commits on top of another base tip.",
    scenarios: [
      {
        title: "Linear history",
        command: "git rebase main",
        explanation: "Moves feature branch commits to start after main's latest commit."
      },
      {
        title: "Interactive rebase to squash commits",
        command: "git rebase -i HEAD~3",
        explanation: "Rewrites recent commits allowing you to squash or reorder them."
      }
    ]
  },
  {
    name: "git reset",
    description: "Reset current HEAD to the specified state.",
    scenarios: [
      {
        title: "Soft reset",
        command: "git reset --soft HEAD~1",
        explanation: "Moves HEAD but leaves index and working tree untouched."
      },
      {
        title: "Hard reset",
        command: "git reset --hard HEAD~1",
        explanation: "Discard all changes in index and working tree."
      }
    ]
  },
  {
    name: "git stash",
    description: "Save changes temporarily without committing.",
    scenarios: [
      {
        title: "Stash with message",
        command: "git stash push -m \"WIP\"",
        explanation: "Save current changes with a description."
      },
      {
        title: "Apply latest stash",
        command: "git stash pop",
        explanation: "Restores changes and removes them from stash."
      }
    ]
  },
  {
    name: "git cherry-pick",
    description: "Apply the changes introduced by some existing commit.",
    scenarios: [
      {
        title: "Cherry-pick a commit",
        command: "git cherry-pick abc123",
        explanation: "Applies commit abc123 onto current branch."
      },
      {
        title: "Cherry-pick with conflicts",
        command: "git cherry-pick abc123",
        explanation: "If conflicts arise, resolve them and run `git cherry-pick --continue`."
      }
    ]
  }
];

function renderCommands() {
  const container = document.getElementById('commands');
  commands.forEach(cmd => {
    const wrapper = document.createElement('section');
    wrapper.className = 'command';

    const title = document.createElement('h2');
    title.textContent = cmd.name;
    wrapper.appendChild(title);

    const desc = document.createElement('p');
    desc.textContent = cmd.description;
    wrapper.appendChild(desc);

    cmd.scenarios.forEach(sc => {
      const scDiv = document.createElement('div');
      scDiv.className = 'scenario';

      const scTitle = document.createElement('h3');
      scTitle.textContent = sc.title;
      scDiv.appendChild(scTitle);

      const code = document.createElement('code');
      code.textContent = sc.command;
      scDiv.appendChild(code);

      const exp = document.createElement('p');
      exp.textContent = sc.explanation;
      scDiv.appendChild(exp);

      wrapper.appendChild(scDiv);
    });

    container.appendChild(wrapper);
  });
}

document.addEventListener('DOMContentLoaded', renderCommands);
