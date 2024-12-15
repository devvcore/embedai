"use strict";(()=>{var l=(c,e,t)=>new Promise((o,i)=>{var a=s=>{try{r(t.next(s))}catch(d){i(d)}},n=s=>{try{r(t.throw(s))}catch(d){i(d)}},r=s=>s.done?o(s.value):Promise.resolve(s.value).then(a,n);r((t=t.apply(c,e)).next())});var m=`
.embedai-widget-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.embedai-chat-button {
  width: 56px;
  height: 56px;
  border-radius: 100px;
  background: var(--button-color, #000000);
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}

.embedai-chat-button:hover {
  transform: scale(1.05);
}

.embedai-chat-window {
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 360px;
  height: 600px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
  display: none;
  flex-direction: column;
  overflow: hidden;
}

.embedai-chat-window.open {
  display: flex;
}

.embedai-welcome-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.embedai-welcome-header {
  padding: 24px 16px;
  background: linear-gradient(to bottom, 
    var(--primary-color) 0%, 
    var(--primary-color)40 50%, 
    white 50%);
  min-height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.embedai-welcome-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  color: inherit;
}

.embedai-welcome-subtitle {
  font-size: 14px;
  margin: 4px 0 0;
  opacity: 0.9;
  color: inherit;
}

.embedai-cards-container {
  padding: 16px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: -60px;
}

.embedai-welcome-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.2s;
}

.embedai-welcome-card:hover {
  background-color: #f9fafb;
}

.embedai-card-content h4 {
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  color: #111827;
}

.embedai-card-content p {
  margin: 4px 0 0;
  font-size: 13px;
  color: #6b7280;
}

.embedai-card-icon {
  color: #6b7280;
}

.embedai-navigation {
  padding: 12px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background: #f9fafb;
}

.embedai-nav-button {
  border: none;
  background: none;
  padding: 0;
  font-size: 14px;
  color: #6b7280;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

.embedai-nav-button:hover {
  color: #111827;
}

.embedai-nav-button.active {
  color: #111827;
}

.embedai-nav-divider {
  height: 16px;
  width: 1px;
  background: #e5e7eb;
}

.embedai-chat-header {
  padding: 16px;
  background: var(--primary-color);
  color: white;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.embedai-back-button {
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: white;
  opacity: 0.9;
  transition: opacity 0.2s;
  margin-top: 2px;
}

.embedai-back-button:hover {
  opacity: 1;
}

.embedai-chat-header h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}

.embedai-chat-header p {
  margin: 4px 0 0;
  font-size: 14px;
  opacity: 0.9;
}

.embedai-messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  background: white;
}

.embedai-input-container {
  padding: 16px;
  border-top: 1px solid #e5e7eb;
  background: white;
  display: flex;
  gap: 8px;
}

.embedai-input {
  flex: 1;
  padding: 8px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 100px;
  outline: none;
  font-size: 14px;
}

.embedai-send-button {
  background: var(--button-color);
  color: white;
  border: none;
  border-radius: 100px;
  padding: 8px 24px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;
}

.embedai-send-button:hover {
  opacity: 0.9;
}

.embedai-chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: white;
}

.embedai-welcome-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: white;
}

.embedai-chat-header {
  padding: 16px;
  background: var(--primary-color);
  color: white;
}

.embedai-chat-header h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}

.embedai-chat-header p {
  margin: 4px 0 0;
  font-size: 14px;
  opacity: 0.9;
}

.embedai-messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  background: white;
}

.embedai-welcome-header {
  padding: 24px 16px;
  background: linear-gradient(to bottom, var(--primary-color) 0%, var(--primary-color)40 35%, white 50%);
}

.embedai-welcome-title {
  color: var(--text-color, white);
  font-size: 24px;
  font-weight: 600;
  margin: 0;
}

.embedai-welcome-subtitle {
  color: var(--text-color, white);
  font-size: 16px;
  margin: 8px 0 0;
  opacity: 0.9;
}

.embedai-cards-container {
  padding: 16px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.embedai-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  transition: opacity 0.3s ease;
}

.embedai-welcome-view {
  z-index: 2;
}

.embedai-chat-view {
  z-index: 1;
}

.embedai-chat-header {
  padding: 16px;
  background: var(--primary-color);
  color: white;
}

.embedai-chat-header h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}

.embedai-chat-header p {
  margin: 4px 0 0;
  font-size: 14px;
  opacity: 0.9;
}

.embedai-messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.embedai-message {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  margin-bottom: 16px;
}

.embedai-message.user {
  justify-content: flex-end;
}

.embedai-message-content {
  padding: 12px 16px;
  border-radius: 12px;
  max-width: 80%;
  line-height: 1.4;
}

.embedai-message.user .embedai-message-content {
  background: var(--primary-color);
  color: var(--text-color, white);
  border-bottom-right-radius: 4px;
}

.embedai-message:not(.user) .embedai-message-content {
  background: #f3f4f6;
  color: #111827;
  border-bottom-left-radius: 4px;
}

.embedai-input-container {
  padding: 16px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  gap: 8px;
}

.embedai-input {
  flex: 1;
  padding: 8px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 100px;
  outline: none;
  font-size: 14px;
}

.embedai-send-button {
  background: var(--button-color);
  color: white;
  border: none;
  border-radius: 100px;
  padding: 8px 24px;
  font-weight: 500;
  cursor: pointer;
}
`,p=class{constructor(e){this.chatId=null;this.showingWelcome=!0;this.botConfig=null;this.organizationId=e.organizationId,this.collectionId=e.collectionId,this.apiUrl=e.apiUrl,this.includePageContext=e.includePageContext||!1,this.injectStyles(),this.loadBotConfig().then(()=>{this.createWidget(),this.attachEventListeners()})}injectStyles(){let e=document.createElement("style");e.textContent=m,document.head.appendChild(e)}loadBotConfig(){return l(this,null,function*(){try{let e=yield fetch(`${this.apiUrl}/get_bot_config?orgId=${this.organizationId}`);if(!e.ok)throw new Error("Failed to load bot config");let t=yield e.json();t.botConfig&&t.botConfig.length>0&&(this.botConfig=t.botConfig[0],this.applyTheme())}catch(e){console.error("Error loading bot config:",e)}})}applyTheme(){this.botConfig&&(document.documentElement.style.setProperty("--primary-color",this.botConfig.primaryColor),document.documentElement.style.setProperty("--button-color",this.botConfig.buttonColor),document.documentElement.style.setProperty("--text-color",this.botConfig.textColor))}createWidget(){var i;this.container=document.createElement("div"),this.container.className="embedai-widget-container";let e=document.createElement("button");e.className="embedai-chat-button",e.innerHTML=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>`,this.chatWindow=document.createElement("div"),this.chatWindow.className="embedai-chat-window";let t=document.createElement("div");t.className="embedai-view embedai-welcome-view";let o=document.createElement("div");o.className="embedai-view embedai-chat-view",o.innerHTML=`
      <div class="embedai-chat-header">
        <button class="embedai-back-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <div>
          <h3>Chat with AI Assistant</h3>
          <p>We typically reply in a few minutes</p>
        </div>
      </div>
      <div class="embedai-messages-container"></div>
      <div class="embedai-input-container">
        <input type="text" class="embedai-input" placeholder="Type your message...">
        <button class="embedai-send-button">Send</button>
      </div>
    `,this.messagesContainer=o.querySelector(".embedai-messages-container"),this.input=o.querySelector(".embedai-input"),this.chatWindow.appendChild(t),this.chatWindow.appendChild(o),this.container.appendChild(this.chatWindow),this.container.appendChild(e),document.body.appendChild(this.container),(i=this.botConfig)!=null&&i.showWelcomePage?(this.createWelcomePage(),o.style.display="none"):(t.style.display="none",this.showChat())}attachEventListeners(){let e=this.container.querySelector(".embedai-chat-button"),t=this.container.querySelector(".embedai-close-button"),o=this.container.querySelector(".embedai-send-button"),i=this.container.querySelector(".embedai-back-button");e==null||e.addEventListener("click",()=>this.toggleChat()),t==null||t.addEventListener("click",()=>this.toggleChat()),o==null||o.addEventListener("click",()=>this.sendMessage()),i==null||i.addEventListener("click",()=>this.showWelcome()),this.input.addEventListener("keypress",a=>{a.key==="Enter"&&this.sendMessage()})}toggleChat(){this.chatWindow.classList.toggle("open")&&!this.chatId&&this.startChat()}getPageContent(){var o;if(!this.includePageContext)return"";let e=i=>{var r;let a=i.cloneNode(!0);return a.querySelectorAll("script, style, noscript, .embedai-widget-container").forEach(s=>s.remove()),((r=a.textContent)==null?void 0:r.replace(/\s+/g," ").trim())||""};return[document.title,(o=document.querySelector('meta[name="description"]'))==null?void 0:o.getAttribute("content"),...Array.from(document.querySelectorAll("main, article, .content, #content")).map(e),document.body.querySelector("main")?"":e(document.body)].filter(Boolean).join(`
`).slice(0,4e3)}startChat(){return l(this,null,function*(){try{let e=yield fetch(`${this.apiUrl}/start_chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({organizationId:this.organizationId,collectionId:this.collectionId})});if(!e.ok)throw new Error("Failed to start chat");let t=yield e.json();this.chatId=t.chatId,this.addMessage("Hi! How can I help you today?",!1)}catch(e){console.error("Error starting chat:",e),this.addMessage("Sorry, I'm having trouble connecting. Please try again later.",!1)}})}sendMessage(e){return l(this,null,function*(){let t=e?JSON.stringify(e):this.input.value.trim();if(!t||!this.chatId)return;this.input.value="",this.input.disabled=!0;let o={content:t,isUser:!0};this.addMessage(t,!0);try{let i=Array.from(this.messagesContainer.children).map(s=>({content:s.textContent||"",isUser:s.classList.contains("embedai-user-message"),organizationId:this.organizationId,collectionName:this.collectionId})),a={chatId:this.chatId,message:t,organizationId:this.organizationId,collectionId:this.collectionId,messages:i};this.includePageContext&&(a.pageContent=this.getPageContent(),a.pageUrl=window.location.href);let n=yield fetch(`${this.apiUrl}/send_message`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!n.ok)throw new Error("Failed to send message");let r=yield n.json();r.use_form?this.addMessageWithForm(r.response,JSON.parse(r.use_form.fields),r.use_form.inputId):r.sources?this.addMessageWithSources(r.response,r.sources):this.addMessage(r.response,!1)}catch(i){console.error("Error sending message:",i),this.addMessage("Sorry, I couldn't process your message. Please try again.",!1)}finally{this.input.disabled=!1}})}addMessageWithSources(e,t){if(this.addMessage(e,!1),t&&t.length>0){let o=document.createElement("div");o.className="embedai-sources",this.messagesContainer.appendChild(o)}}formatMarkdown(e){return e.replace(/###\s+(.*?)(?:\n|$)/g,'<h3 style="font-size: 16px; font-weight: 600; margin: 16px 0 8px;">$1</h3>').replace(/##\s+(.*?)(?:\n|$)/g,'<h2 style="font-size: 18px; font-weight: 600; margin: 16px 0 8px;">$1</h2>').replace(/#\s+(.*?)(?:\n|$)/g,'<h1 style="font-size: 20px; font-weight: 600; margin: 16px 0 8px;">$1</h1>').replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/```([\s\S]*?)```/g,"<pre><code>$1</code></pre>").replace(/`(.*?)`/g,"<code>$1</code>").replace(/^\d+\.\s+(.*)$/gm,"<li>$1</li>").replace(/^-\s+(.*)$/gm,"<li>$1</li>").replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" target="_blank">$1</a>').replace(/\n/g,"<br>")}addMessage(e,t){let o=document.createElement("div");if(o.className=`embedai-message ${t?"user":""}`,o.style.cssText=`
      display: flex;
      gap: 8px;
      align-items: flex-start;
      margin-bottom: 16px;
      ${t?"justify-content: flex-end;":""}
    `,!t){let n=document.createElement("div");n.className="embedai-avatar",n.style.cssText=`
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #e5e7eb;
        flex-shrink: 0;
      `,o.appendChild(n)}let i=document.createElement("div");i.className="embedai-message-content",i.style.cssText=`
      padding: 8px 12px;
      border-radius: 12px;
      max-width: 80%;
      line-height: 1.4;
      ${t?`
          background: var(--primary-color);
          color: var(--text-color, white);
          border-bottom-right-radius: 4px;
        `:`
          background: #f3f4f6;
          color: #111827;
          border-bottom-left-radius: 4px;
        `}
    `;let a=document.createElement("style");a.textContent=`
      .embedai-message-content h1,
      .embedai-message-content h2,
      .embedai-message-content h3 {
        font-weight: 600;
        margin: 16px 0 8px;
        line-height: 1.2;
      }

      .embedai-message-content h1 { font-size: 20px; }
      .embedai-message-content h2 { font-size: 18px; }
      .embedai-message-content h3 { font-size: 16px; }

      .embedai-message-content code {
        background: rgba(0,0,0,0.05);
        padding: 2px 4px;
        border-radius: 4px;
        font-family: monospace;
        font-size: 0.9em;
      }
      
      .embedai-message-content pre {
        background: rgba(0,0,0,0.05);
        padding: 12px;
        border-radius: 4px;
        overflow-x: auto;
        margin: 8px 0;
      }
      
      .embedai-message-content pre code {
        background: none;
        padding: 0;
      }
      
      .embedai-message-content a {
        color: #2563eb;
        text-decoration: underline;
      }
      
      .embedai-message-content ul, 
      .embedai-message-content ol {
        margin: 8px 0;
        padding-left: 20px;
      }

      .embedai-message-content p {
        margin: 8px 0;
      }
    `,document.head.appendChild(a),t?i.textContent=e:i.innerHTML=this.formatMarkdown(e),o.appendChild(i),this.messagesContainer.appendChild(o),this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight}addMessageWithForm(e,t,o){this.addMessage(e,!1);let i=document.createElement("form");i.className="embedai-form",i.style.cssText=`
      margin: 16px 0;
      padding: 16px;
      background: white;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    `,t.forEach(n=>{let r=document.createElement("div");r.style.cssText=`
        margin-bottom: 16px;
        display: flex;
        flex-direction: column;
        gap: 6px;
      `;let s=document.createElement("label");s.textContent=n.label,s.style.cssText=`
        font-size: 14px;
        font-weight: 500;
        color: #374151;
      `;let d=n.type==="textarea"?document.createElement("textarea"):document.createElement("input");d.className="embedai-form-input",d.name=n.name,n.type!=="textarea"&&(d.type=n.type),d.required=n.required||!1,d.style.cssText=`
        padding: 8px 12px;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        font-size: 14px;
        line-height: 1.5;
        width: 100%;
        transition: border-color 0.15s ease;
        outline: none;
        background: #f9fafb;

        &:focus {
          border-color: var(--primary-color);
          box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb), 0.1);
        }

        &::placeholder {
          color: #9ca3af;
        }
      `,n.type==="textarea"&&(d.style.minHeight="100px",d.style.resize="vertical"),r.appendChild(s),r.appendChild(d),i.appendChild(r)});let a=document.createElement("button");if(a.type="submit",a.className="embedai-send-button",a.textContent="Submit",a.style.cssText=`
      width: 100%;
      padding: 10px 16px;
      background: var(--primary-color);
      color: var(--text-color, white);
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 0.9;
      }

      &:active {
        transform: scale(0.98);
      }
    `,t.some(n=>n.required)){let n=document.createElement("div");n.style.cssText=`
        font-size: 12px;
        color: #6b7280;
        margin-top: 12px;
        text-align: center;
      `,n.textContent="* Required fields",i.appendChild(n)}i.appendChild(a),i.addEventListener("submit",n=>l(this,null,function*(){n.preventDefault(),a.disabled=!0,a.style.opacity="0.7",a.textContent="Submitting...";let r=new FormData(i),s=Object.fromEntries(r.entries());yield this.sendMessage({formData:s,inputId:o}),i.remove()})),this.messagesContainer.appendChild(i),this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight}createWelcomePage(){if(!this.botConfig)return;let e=this.chatWindow.querySelector(".embedai-welcome-view");if(!e)return;e.innerHTML="";let t=document.createElement("div");t.className="embedai-welcome-container";let o=document.createElement("div");o.className="embedai-welcome-header",o.style.cssText=`
      padding: 24px 16px;
      background: linear-gradient(to bottom, 
        ${this.botConfig.primaryColor} 0%, 
        ${this.botConfig.primaryColor} 50%, 
        ${this.botConfig.primaryColor}40 75%, 
        white 100%);
      min-height: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    `,o.innerHTML=`
      <h3 class="embedai-welcome-title" style="color: ${this.botConfig.textColor}">${this.botConfig.welcomeTitle}</h3>
      <p class="embedai-welcome-subtitle" style="color: ${this.botConfig.textColor}">${this.botConfig.welcomeSubtitle}</p>
    `;let i=document.createElement("div");i.className="embedai-cards-container",i.style.cssText=`
      padding: 16px;
      flex: 1;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: -60px;
      position: relative;
      z-index: 1;
    `,this.botConfig.welcomeCards.forEach(s=>{i.appendChild(this.createWelcomeCard(s))});let a=document.createElement("div");a.className="embedai-navigation",a.innerHTML=`
      <button class="embedai-nav-button active">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 12l9-9 9 9h-2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7H3z"></path>
        </svg>
        Home
      </button>
      <div class="embedai-nav-divider"></div>
      <button class="embedai-nav-button">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        Chat With Us
      </button>
    `,t.appendChild(o),t.appendChild(i),t.appendChild(a),e.appendChild(t);let[n,r]=a.querySelectorAll(".embedai-nav-button");n.addEventListener("click",()=>this.showWelcome()),r.addEventListener("click",()=>this.showChat())}createWelcomeCard(e){let t=document.createElement("div");return t.className="embedai-welcome-card",t.innerHTML=`
      <div class="embedai-card-content">
        <h4>${e.title}</h4>
        <p>${e.description}</p>
      </div>
      <div class="embedai-card-icon">
        ${e.type==="quick-ask"?'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>':'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"></path></svg>'}
      </div>
    `,t.addEventListener("click",()=>{e.type==="quick-ask"?(this.showChat(),e.action&&(this.input.value=e.action,this.sendMessage())):e.type==="navigation"&&e.action&&(window.location.href=e.action)}),t}showWelcome(){let e=this.chatWindow.querySelector(".embedai-welcome-view"),t=this.chatWindow.querySelector(".embedai-chat-view");e.style.display="flex",t.style.display="none",this.showingWelcome=!0,this.updateNavigation()}showChat(){let e=this.chatWindow.querySelector(".embedai-welcome-view"),t=this.chatWindow.querySelector(".embedai-chat-view");e.style.display="none",t.style.display="flex",this.showingWelcome=!1,this.updateNavigation(),this.chatId||this.startChat()}updateNavigation(){let e=this.chatWindow.querySelector(".embedai-nav-button:first-child"),t=this.chatWindow.querySelector(".embedai-nav-button:last-child");e&&t&&(e.classList.toggle("active",this.showingWelcome),t.classList.toggle("active",!this.showingWelcome))}};(function(){let c=document.currentScript;if(c){let e=c.getAttribute("data-org-id"),t=c.getAttribute("data-collection-id"),o=c.getAttribute("data-api-url");e&&t&&o&&new p({organizationId:e,collectionId:t,apiUrl:o})}window.EmbedAIWidget=p})();})();
