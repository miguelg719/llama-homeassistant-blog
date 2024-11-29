---
title: "Llama + Home Assistant: Your local smart home assistant"
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus."
coverImage: {
  src: "/assets/videos/smart_home_demo.mp4",
  isVideo: true,
  poster: "/assets/images/thumbnail.png"
}
date: "2020-03-16T05:35:07.322Z"
author:
  name: Miguel Gonzalez
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Smart home technology has revolutionized how we interact with our homes, but it comes with significant trade-offs: fragmented ecosystems, privacy concerns, and a lack of truly personalized automation. What if you could have all the convenience of a smart home assistant without sacrificing your data or control? In this quickstart we introduce a groundbreaking integration of Home Assistant and Meta’s Llama 3.2 delivering the world’s first private, local, and adaptive smart home assistant.

The current landscape of smart home technology faces the following challenges:

1. **Fragmentation**: Devices from different brands rarely play well together, forcing users to juggle multiple apps and interfaces.
2. **Privacy Concerns**: Popular assistants rely on cloud-based processing, exposing your data to external servers and risking potential breaches.
3. **Lack of Personalization**: While assistants can perform basic tasks, they often fail to learn and adapt to your unique needs and habits.

These limitations create a frustrating user experience that prioritizes convenience over privacy and customization. Open-source frameworks like Home Assistant, a platform that connects and manages smart devices, aim to address some of these issues, but their complex setup and learning curve can discourage non-technical users from adopting them. By leveraging Meta’s Llama 3.2, an advanced large language model (LLM) available in small sizes (1B, 3B), we introduce a system that:

1. **Processes Locally**: All data stays on your home network, ensuring privacy and eliminating dependence on the cloud.
2. **Simplifies Smart Home Management**: Home Assistant acts as a centralized hub, unifying control of devices across brands and ecosystems whereas the Llama model allows you to control devices and create automations using intuitive voice or text commands.
3. **Learns and Adapts**: The system proactively suggests and implements automations based on your preferences and routines.

## **Try it yourself**

In this quickstart, we will guide you through the first steps of setting up the integration. We will download Home Assistant as a Docker container, run through the onboarding process, start our backend server, and finally run a Gradio frontend to interact with the Llama model. 

### **Prerequisites**

  - Docker
  - Python 3.10+
  - Ollama


### **1. Clone the repo**

You can find the repo __[here](https://github.com/miguelg719/homeassistant-llama)__.

```bash
git clone https://github.com/miguelg719/homeassistant-llama
cd homeassistant-llama
```

Notice how the repo contains frontend/ and backend/ directories. The frontend directory contains a Gradio app that allows you to interact with the backend. The backend directory contains the Home Assistant configuration and a FastAPI server that allows you to interact with the Home Assistant API and the Llama model through Ollama.


### **2. Compose the backend**

The next step is to compose the backend. This will download and start the Home Assistant container and the FastAPI server. 

```bash
docker compose up --build
```

### **3. Setting up Home Assistant**

Once Home Assistant has started, you will be able to access the onboarding page by navigating to _[http://localhost:8123](http://localhost:8123)_

You should see a page like this:

![Home Assistant onboarding](/llama-homeassistant-blog/assets/images/ha_onboarding.png)

Click on **Create my smart home** and follow the instructions.
Once you have completed the onboarding, you will see a dashboard like this:

![Home Assistant dashboard](/llama-homeassistant-blog/assets/images/ha_dashboard.png)


__(Optional)__ The next step is optional but, since this quickstart enables only a few supported actions, we recommend editing the dashboard to display lights, an alarm panel, and a thermostat. You can do this by clicking on the top right pencil icon and then the three dots on the top right corner of the popup. Like this:

![Home Assistant dashboard customization](/llama-homeassistant-blog/assets/images/ha_dashboard_customization.png)

Click on **Take control** and select **Start with an empty dashboard**. The UI to customize the dashboard should be intuitive; feel free to play around with it and try to add different cards. The goal is to have a dashboard that looks like this:

![Home Assistant dashboard](/llama-homeassistant-blog/assets/images/ha_dashboard_final.png)

### **4. Paste the Home Assistant API token into your .env file**

With the onboarding complete, and (hopefully) the dashboard customized, we can now issue a token for our Llama agent to interact with Home Assistant. Follow these steps:

- Click on your **profile** at the bottom left corner of the page.
- On the new page, go to the **Security** tab.
- Scroll down until you see the **Long-Lived Access Tokens** section.
- Click on **Create token**.
- Give the token a name and click **OK**.
- Make sure you **copy the token and save it somewhere**, it will not be shown again. 

![Home Assistant token](/llama-homeassistant-blog/assets/images/ha_token.png)

With the token created, in the root directory of the repo, make your own **.env** file based on the provided _.env.example_ file and paste the token in the **HOMEASSISTANT_TOKEN** field.

### **5. Re-compose the backend**

Now that we have the access token, we are ready to restart the FastAPI server so the agent can interact with our smart home.

**Make sure to have Ollama running** (the agent will request from the default port _:11434_). Try to pull the llama3.2 model first by running:

```bash
ollama pull llama3.2
```

Then you can restart the backend with the updated .env file:

```bash
docker compose down 
``` 
```bash
docker compose up 
``` 

At this point our agent is ready to interact with the home. It will be waiting for requests on _localhost:8000_ as a proxy to query the Llama model, parse the generated response from Llama, and call the appropriate function (if needed) in Home Assistant. 

### **6. Start the frontend**

The frontend is a simple Gradio app that will issue requests to our server and display the response from Llama after performing any necessary actions. Make sure to have the dependencies installed by running

```bash
pip install gradio requests
```

To start the Gradio app, simply run:

```bash
cd frontend
python gradio_app.py
```

The frontend will start on  _[http://localhost:7860](http://localhost:7860)_ and you should see a screen like this:

![Gradio frontend](/llama-homeassistant-blog/assets/images/gradio.png)

Now you can send a request to the agent and see how it interacts with your smart home. You can ask things like:

- "Turn on the bedroom light"
- "Set the alarm to away, the code is 1234"
- "It's a bit cold here, can you increase the temperature to 80 degrees?"

You can also ask for cooking recipes, cleaning routines, and more.

## **Next Steps**

1. Hope you enjoyed this quickstart! The demo video shows a few example requests and provides a taste of what is possible with this integration. 
2. Feel free to reach out with any questions or feedback, here is my **[email](mailto:miguelg71921@gmail.com)**, also happy to connect on **[LinkedIn](https://www.linkedin.com/in/gonzalezfernandezmiguel/)**. We encourage you to expand the functionality of the agent by adding more automations and actions on this repo:

**[https://github.com/miguelg719/homeassistant-llama](https://github.com/miguelg719/homeassistant-llama)**

Keep hacking!

<!-- 
## Key Features and Use Cases

### 1. Dynamic Automation
Combine multiple actions into a single command. For example:
- Say, “Set movie mode,” and the system dims the lights, closes the blinds, and turns on your TV.

### 2. Energy Efficiency
Automatically adjust the thermostat based on weather forecasts and occupancy, helping you save energy and reduce costs.

### 3. Home Security
Respond to commands like, “Check all doors,” by summarizing the lock status and alerting you to anomalies.

### 4. Family Routines
Simplify daily life with routines like “morning prep” that turn on lights, start the coffee maker, and play the news.

### 5. Accessibility Support
Enable hands-free control for individuals with disabilities through natural language interactions. -->