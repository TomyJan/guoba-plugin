import{d as defineComponent,p as propTypes,a3 as useUserStore,C as computed,c as resolveComponent,o as openBlock,e as createElementBlock,j as createVNode,v as createBaseVNode,m as toDisplayString}from"./index.js";import{t as timeFix,w as welcome}from"./common.js";const _hoisted_1={class:"lg:flex"},_hoisted_2={class:"md:ml-6 flex flex-col justify-center md:mt-0 mt-2"},_hoisted_3={class:"md:text-lg text-md"},_hoisted_4={class:"text-secondary"},_hoisted_5={class:"flex flex-1 justify-end md:mt-0 mt-4"},_hoisted_6={class:"flex flex-col justify-center text-right"},_hoisted_7=createBaseVNode("span",{class:"text-secondary"}," Cookie用户数 ",-1),_hoisted_8={class:"text-2xl"},_hoisted_9={class:"flex flex-col justify-center text-right md:mx-16 mx-12"},_hoisted_10=createBaseVNode("span",{class:"text-secondary"}," 群聊数量 ",-1),_hoisted_11={class:"text-2xl"},_hoisted_12={class:"flex flex-col justify-center text-right md:mr-10 mr-4"},_hoisted_13=createBaseVNode("span",{class:"text-secondary"}," 好友数量 ",-1),_hoisted_14={class:"text-2xl"},_sfc_main=defineComponent({__name:"WorkbenchHeader",props:{data:propTypes.object.isRequired,weather:propTypes.string.isRequired},setup(__props){const props=__props,userStore=useUserStore(),userinfo=computed((()=>userStore.getUserInfo)),textWelcome=computed((()=>{var _a;if(!userinfo.value)return"loading…";let time=timeFix(),text=welcome();return`${time}，${null==(_a=userinfo.value)?void 0:_a.realName}，${text}`})),textSecondary=computed((()=>{let{weather:weather}=props;return weather||"loading…"}));return(_ctx,_cache)=>{const _component_GAvatar=resolveComponent("GAvatar");return openBlock(),createElementBlock("div",_hoisted_1,[createVNode(_component_GAvatar,{id:userinfo.value.userId,qs:100,size:60,class:"!mx-auto !block"},null,8,["id"]),createBaseVNode("div",_hoisted_2,[createBaseVNode("h1",_hoisted_3,toDisplayString(textWelcome.value),1),createBaseVNode("span",_hoisted_4,toDisplayString(textSecondary.value),1)]),createBaseVNode("div",_hoisted_5,[createBaseVNode("div",_hoisted_6,[_hoisted_7,createBaseVNode("span",_hoisted_8,toDisplayString(__props.data.cookieCount),1)]),createBaseVNode("div",_hoisted_9,[_hoisted_10,createBaseVNode("span",_hoisted_11,toDisplayString(__props.data.groupCount),1)]),createBaseVNode("div",_hoisted_12,[_hoisted_13,createBaseVNode("span",_hoisted_14,toDisplayString(__props.data.friendCount),1)])])])}}});export{_sfc_main as _};