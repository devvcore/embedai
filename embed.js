"use strict";(()=>{var p=(c,e,t)=>new Promise((n,i)=>{var o=a=>{try{s(t.next(a))}catch(d){i(d)}},r=a=>{try{s(t.throw(a))}catch(d){i(d)}},s=a=>a.done?n(a.value):Promise.resolve(a.value).then(o,r);s((t=t.apply(c,e)).next())});var u=`
.embedai-widget-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}

.embedai-chat-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #000000;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
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
  width: 380px;
  height: 600px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  display: none;
  flex-direction: column;
  overflow: hidden;
}

.embedai-chat-window.open {
  display: flex;
}

.embedai-chat-header {
  padding: 16px;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.embedai-chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.embedai-message {
  margin-bottom: 12px;
  max-width: 80%;
  padding: 8px 12px;
  border-radius: 8px;
  line-height: 1.4;
}

.embedai-user-message {
  background: #000000;
  color: white;
  margin-left: auto;
}

.embedai-ai-message {
  background: #f3f4f6;
  color: #1f2937;
}

.embedai-input-container {
  padding: 16px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  gap: 8px;
}

.embedai-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  outline: none;
}

.embedai-send-button {
  padding: 8px 16px;
  background: #000000;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.embedai-send-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.embedai-sources {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid #e5e7eb;
  font-size: 12px;
}

.embedai-sources-label {
  font-weight: 600;
  margin-bottom: 4px;
}

.embedai-source-button {
  padding: 2px 8px;
  margin-right: 4px;
  background: #f3f4f6;
  border: none;
  border-radius: 12px;
  cursor: pointer;
}

.embedai-source-button:hover {
  background: #e5e7eb;
}

.embedai-source-content {
  margin-top: 8px;
  padding: 8px;
  background: #f3f4f6;
  border-radius: 4px;
  font-size: 12px;
}

.embedai-source-title {
  font-weight: 600;
  margin-bottom: 4px;
}

.embedai-source-text {
  white-space: pre-line;
  color: #4b5563;
}

.embedai-form textarea.embedai-input {
  min-height: 100px;
  resize: vertical;
}

.embedai-form .embedai-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  margin-top: 4px;
}

.embedai-form label {
  color: #374151;
}

.embedai-form button[type="submit"] {
  margin-top: 8px;
}
`,h=class{constructor(e){this.chatId=null;this.organizationId=e.organizationId,this.collectionId=e.collectionId,this.apiUrl=e.apiUrl,this.includePageContext=e.includePageContext||!1,this.injectStyles(),this.createWidget(),this.attachEventListeners()}injectStyles(){let e=document.createElement("style");e.textContent=u,document.head.appendChild(e)}createWidget(){this.container=document.createElement("div"),this.container.className="embedai-widget-container";let e=document.createElement("button");e.className="embedai-chat-button",e.innerHTML=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>`,this.chatWindow=document.createElement("div"),this.chatWindow.className="embedai-chat-window";let t=document.createElement("div");t.className="embedai-chat-header",t.innerHTML=`
      <span>Chat with AI Assistant</span>
      <button class="embedai-close-button"></button>
    `,this.messagesContainer=document.createElement("div"),this.messagesContainer.className="embedai-chat-messages";let n=document.createElement("div");n.className="embedai-input-container",this.input=document.createElement("input"),this.input.className="embedai-input",this.input.placeholder="Type your message...";let i=document.createElement("button");i.className="embedai-send-button",i.textContent="Send",n.appendChild(this.input),n.appendChild(i),this.chatWindow.appendChild(t),this.chatWindow.appendChild(this.messagesContainer),this.chatWindow.appendChild(n),this.container.appendChild(this.chatWindow),this.container.appendChild(e),document.body.appendChild(this.container)}attachEventListeners(){let e=this.container.querySelector(".embedai-chat-button"),t=this.container.querySelector(".embedai-close-button"),n=this.container.querySelector(".embedai-send-button");e==null||e.addEventListener("click",()=>this.toggleChat()),t==null||t.addEventListener("click",()=>this.toggleChat()),n==null||n.addEventListener("click",()=>this.sendMessage()),this.input.addEventListener("keypress",i=>{i.key==="Enter"&&this.sendMessage()})}toggleChat(){this.chatWindow.classList.toggle("open")&&!this.chatId&&this.startChat()}getPageContent(){var n;if(!this.includePageContext)return"";let e=i=>{var s;let o=i.cloneNode(!0);return o.querySelectorAll("script, style, noscript, .embedai-widget-container").forEach(a=>a.remove()),((s=o.textContent)==null?void 0:s.replace(/\s+/g," ").trim())||""};return[document.title,(n=document.querySelector('meta[name="description"]'))==null?void 0:n.getAttribute("content"),...Array.from(document.querySelectorAll("main, article, .content, #content")).map(e),document.body.querySelector("main")?"":e(document.body)].filter(Boolean).join(`
`).slice(0,4e3)}startChat(){return p(this,null,function*(){try{let e=yield fetch(`${this.apiUrl}/start_chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({organizationId:this.organizationId,collectionId:this.collectionId})});if(!e.ok)throw new Error("Failed to start chat");let t=yield e.json();this.chatId=t.chatId,this.addMessage("Hi! How can I help you today?",!1)}catch(e){console.error("Error starting chat:",e),this.addMessage("Sorry, I'm having trouble connecting. Please try again later.",!1)}})}sendMessage(e){return p(this,null,function*(){let t=e?JSON.stringify(e):this.input.value.trim();if(!t||!this.chatId)return;this.input.value="",this.input.disabled=!0;let n={content:t,isUser:!0};this.addMessage(t,!0);try{let i=Array.from(this.messagesContainer.children).map(a=>({content:a.textContent||"",isUser:a.classList.contains("embedai-user-message"),organizationId:this.organizationId,collectionName:this.collectionId})),o={chatId:this.chatId,message:t,organizationId:this.organizationId,collectionId:this.collectionId,messages:i};this.includePageContext&&(o.pageContent=this.getPageContent(),o.pageUrl=window.location.href);let r=yield fetch(`${this.apiUrl}/send_message`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!r.ok)throw new Error("Failed to send message");let s=yield r.json();s.use_form?this.addMessageWithForm(s.response,JSON.parse(s.use_form.fields),s.use_form.inputId):s.sources?this.addMessageWithSources(s.response,s.sources):this.addMessage(s.response,!1)}catch(i){console.error("Error sending message:",i),this.addMessage("Sorry, I couldn't process your message. Please try again.",!1)}finally{this.input.disabled=!1}})}addMessageWithSources(e,t){let n=document.createElement("div");n.className="embedai-message embedai-ai-message";let i=document.createElement("div");if(i.textContent=e,n.appendChild(i),t&&t.length>0){let o=document.createElement("div");o.className="embedai-sources",o.innerHTML=`
        <div class="embedai-sources-label">Sources:</div>
        ${t.map((s,a)=>`
          <button class="embedai-source-button">${a+1}</button>
        `).join("")}
      `,n.appendChild(o),o.querySelectorAll(".embedai-source-button").forEach((s,a)=>{s.addEventListener("click",()=>{this.toggleSource(n,t[a])})})}this.messagesContainer.appendChild(n),this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight}toggleSource(e,t){let n=e.querySelector(".embedai-source-content");if(n){n.remove();return}let i=document.createElement("div");i.className="embedai-source-content",i.innerHTML=`
      <div class="embedai-source-title">${t.file_name||"Source"}</div>
      <div class="embedai-source-text">${t.chunk}</div>
    `,e.appendChild(i)}addMessage(e,t){let n=document.createElement("div");n.className=`embedai-message ${t?"embedai-user-message":"embedai-ai-message"}`,n.textContent=e,this.messagesContainer.appendChild(n),this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight}addMessageWithForm(e,t,n){let i=document.createElement("div");i.className="embedai-message embedai-ai-message";let o=document.createElement("div");o.textContent=e,i.appendChild(o);let r=document.createElement("form");r.className="embedai-form",r.style.marginTop="16px",t.forEach(a=>{let d=document.createElement("div");d.style.marginBottom="12px";let l=document.createElement("label");l.textContent=a.label,l.style.display="block",l.style.marginBottom="4px",l.style.fontWeight="500";let m=a.type==="textarea"?document.createElement("textarea"):document.createElement("input");m.className="embedai-input",m.name=a.name,a.type!=="textarea"&&(m.type=a.type),m.required=a.required||!1,d.appendChild(l),d.appendChild(m),r.appendChild(d)});let s=document.createElement("button");s.type="submit",s.className="embedai-send-button",s.textContent="Submit",s.style.width="100%",r.appendChild(s),r.addEventListener("submit",a=>p(this,null,function*(){a.preventDefault();let d=new FormData(r),l=Object.fromEntries(d.entries());yield this.sendMessage({formData:l,inputId:n}),r.remove()})),i.appendChild(r),this.messagesContainer.appendChild(i),this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight}};(function(){let c=document.currentScript;if(c){let e=c.getAttribute("data-org-id"),t=c.getAttribute("data-collection-id"),n=c.getAttribute("data-api-url");e&&t&&n&&new h({organizationId:e,collectionId:t,apiUrl:n})}window.EmbedAIWidget=h})();})();
