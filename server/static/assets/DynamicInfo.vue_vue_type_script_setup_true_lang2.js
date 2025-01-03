import{d as defineComponent,bj as List,c as resolveComponent,o as openBlock,h as createBlock,i as withCtx,j as createVNode,k as createTextVNode,y as unref,m as toDisplayString,v as createBaseVNode,a2 as Icon,D as mergeProps,bc as Card}from"./index.js";import{d as dynamicInfoItems}from"./data3.js";const _hoisted_1=["innerHTML"],_sfc_main=defineComponent({__name:"DynamicInfo",setup(__props){const ListItem=List.Item,ListItemMeta=List.Item.Meta;return(_ctx,_cache)=>{const _component_a_button=resolveComponent("a-button");return openBlock(),createBlock(unref(Card),mergeProps({title:"最新动态"},_ctx.$attrs),{extra:withCtx((()=>[createVNode(_component_a_button,{type:"link",size:"small"},{default:withCtx((()=>[createTextVNode("更多")])),_:1})])),default:withCtx((()=>[createVNode(unref(List),{"item-layout":"horizontal","data-source":unref(dynamicInfoItems)},{renderItem:withCtx((({item:item})=>[createVNode(unref(ListItem),null,{default:withCtx((()=>[createVNode(unref(ListItemMeta),null,{description:withCtx((()=>[createTextVNode(toDisplayString(item.date),1)])),title:withCtx((()=>[createTextVNode(toDisplayString(item.name)+" ",1),createBaseVNode("span",{innerHTML:item.desc},null,8,_hoisted_1)])),avatar:withCtx((()=>[createVNode(unref(Icon),{icon:item.avatar,size:30},null,8,["icon"])])),_:2},1024)])),_:2},1024)])),_:1},8,["data-source"])])),_:1},16)}}});export{_sfc_main as _};