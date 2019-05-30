# 리눅스 우분투 16.04에서 vim 에디터 설치하기

<https://vi.stackexchange.com/questions/10817/how-can-i-get-a-newer-version-of-vim-on-ubuntu>

```bash
sudo add-apt-repository ppa:jonathonf/vim
```

```bash
sudo apt update
```

```bash
sudo apt install vim
```

---

You have three different options:

- Wait for the newest versions to be added to the distribution packages. Note that you might want to learn a new language or build a ship with your bare hands while you wait.

If waiting several years is not good for you then you have the following two options:

- Use a PPA containing the latest version:

  - Pros:

    - Easy to do.
    - Totally automated.
    - Let you install Vim as any other software.

  - Cons:
    - You basically grant root privileges to a complete stranger.
    - This method only works on Ubuntu and the derived distributions using PPA system.

- Build Vim from sources:
  - Pros:
    - You get a fine tuning of the options you enable (gui, Python/Lua support, etc.).
    - You get the bleeding edge version and don't need any third party maintainer to get it.
    - It's always useful to learn how to compile a software from sources.
    - This is a distribution agnostic method.
  - Cons:
    - Not as automated as the PPA option.
    - Can be frightening for a new user.

In two latter cases, here is a procedure for these options:

---

PPA
Here is an online tutorial on tipsonubuntu.com (Thanks @joeytwiddle who suggested it in the comments).

First open a terminal and use the following command. This will add the Personal Packet Archive (PPA) maintained by joathonf to you repos and let Ubuntu know where to look for Vim:

```bash
sudo add-apt-repository ppa:jonathonf/vim
```

I'll repeat here that doing this give the root privileges to the scripts in this PPA, do it only if you trust it. You may want to read are PPA's safe to add to my system and what are some “red flags” to watch out for? and is there any guarantee that software from Launchpad PPAs is free from viruses and backdoor threats?.

Update the packet list so Ubuntu will look in the PPA to find the Vim files:

```bash
sudo apt update
```

Finally install vim:

```bash
sudo apt install vim
```

And tada! Vim is installed. Note that you can also do that from the GUI package manager.

Note that this is not the only PPA available with newer Vim versions, you can use your favourite search engine to find more (and do remember you are trusting some stranger from the internet with root access to your system).
