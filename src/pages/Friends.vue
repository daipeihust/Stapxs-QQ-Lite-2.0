<!--
 * @FileDescription: 联系人列表页面
 * @Author: Stapxs
 * @Date: 
 *      2022/08/14
 *      2022/12/12
 * @Version:
 *      1.0 - 初始版本
 *      1.5 - 重构为 ts 版本，代码格式优化
-->

<template>
    <div class="friend-view">
        <div :class="'friend-list' + (runtimeData.tags.openSideBar ? ' open' : '')" id="friend-list">
            <div>
                <div class="base">
                    <span>{{ $t('friend_title') }}</span>
                    <div style="flex: 1;"></div>
                    <svg @click="reloadUser" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M496 48V192c0 17.69-14.31 32-32 32H320c-17.69 0-32-14.31-32-32s14.31-32 32-32h63.39c-29.97-39.7-77.25-63.78-127.6-63.78C167.7 96.22 96 167.9 96 256s71.69 159.8 159.8 159.8c34.88 0 68.03-11.03 95.88-31.94c14.22-10.53 34.22-7.75 44.81 6.375c10.59 14.16 7.75 34.22-6.375 44.81c-39.03 29.28-85.36 44.86-134.2 44.86C132.5 479.9 32 379.4 32 256s100.5-223.9 223.9-223.9c69.15 0 134 32.47 176.1 86.12V48c0-17.69 14.31-32 32-32S496 30.31 496 48z" />
                    </svg>
                </div>
                <div class="small">
                    <label>
                        <input v-model="searchInfo" @input="search" type="text" :placeholder="$t('base_search')">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                                d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
                        </svg>
                    </label>
                    <div class="reload" @click="reloadUser">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                                d="M496 48V192c0 17.69-14.31 32-32 32H320c-17.69 0-32-14.31-32-32s14.31-32 32-32h63.39c-29.97-39.7-77.25-63.78-127.6-63.78C167.7 96.22 96 167.9 96 256s71.69 159.8 159.8 159.8c34.88 0 68.03-11.03 95.88-31.94c14.22-10.53 34.22-7.75 44.81 6.375c10.59 14.16 7.75 34.22-6.375 44.81c-39.03 29.28-85.36 44.86-134.2 44.86C132.5 479.9 32 379.4 32 256s100.5-223.9 223.9-223.9c69.15 0 134 32.47 176.1 86.12V48c0-17.69 14.31-32 32-32S496 30.31 496 48z" />
                        </svg>
                    </div>
                    <div @click="openLeftBar">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                    </div>
                </div>
                <label>
                    <input v-model="searchInfo" @input="search" type="text" :placeholder="$t('base_search')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
                    </svg>
                </label>
            </div>
            <div :class="(runtimeData.tags.openSideBar ? 'open' : '')">
                <template v-if="runtimeData.showList.length <= 0">
                    <template v-for="name in runtimeData.tags.classes"
                        :key="'class-' + Object.keys(name)[0]">
                        <div :class="'list exp-body' + (classStatus[Object.keys(name)[0]] == true ? ' open' : '')">
                            <header :title="(Object.values(name)[0] as string)" :class="'exp-header' + (runtimeData.tags.openSideBar ? ' open' : '')" @click="classClick(Object.keys(name)[0])">
                                <div></div>
                                <span>{{ Object.values(name)[0] }}</span>
                                <a>{{ runtimeData.userList.filter((get) => { return get.class_id == Number(Object.keys(name)[0]) }).length }}</a>
                            </header>
                            <div :id="'class-' + Object.keys(name)[0]">
                                <FriendBody 
                                    v-for="item in runtimeData.userList.filter((get) => { return get.class_id == Number(Object.keys(name)[0]) })"
                                    :key="'fb-' + (item.user_id ? item.user_id : item.group_id)" :data="item"
                                    @click="userClick(item, $event)">
                                </FriendBody>
                            </div>
                        </div>
                    </template>
                    <div :class="'list exp-body' + (classStatus['-1'] == true ? ' open' : '')">
                        <header :title="$t('friend_group')" :class="'exp-header' + (runtimeData.tags.openSideBar ? ' open' : '')" @click="classClick('-1')">
                            <div></div>
                            <span>{{ $t('friend_group') }}</span>
                            <a>{{ runtimeData.userList.filter((get) => { return get.class_id == undefined }).length }}</a>
                        </header>
                        <div>
                            <FriendBody 
                                v-for="item in runtimeData.userList.filter((get) => { return get.class_id == undefined })"
                                :key="'fb-' + (item.user_id ? item.user_id : item.group_id)" :data="item"
                                @click="userClick(item, $event)">
                            </FriendBody>
                        </div>
                    </div>
                </template>
                <!-- 搜索用的 -->
                <FriendBody v-for="item in runtimeData.showList.length > 0 ? runtimeData.showList : []"
                    :key="'fb-' + (item.user_id ? item.user_id : item.group_id)" :data="item"
                    @click="userClick(item, $event)">
                </FriendBody>
            </div>
        </div>
        <div :class="'friend-list-space' + (runtimeData.tags.openSideBar ? ' open' : '')">
            <div class="ss-card">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M447 56.25C443.5 42 430.7 31.1 416 31.1H96c-14.69 0-27.47 10-31.03 24.25L3.715 304.9C1.247 314.9 0 325.2 0 335.5v96.47c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-96.47c0-10.32-1.247-20.6-3.715-30.61L447 56.25zM352 352H160L128 288H72.97L121 96h270l48.03 192H384L352 352z" />
                </svg>
                <span>{{ $t('chat_space') }}</span>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import FriendBody from '@/components/FriendBody.vue'

import { defineComponent } from 'vue'
import { BaseChatInfoElem, UserFriendElem } from '@/function/elements/information'
import { UserGroupElem } from '@/function/elements/information'

import { runtimeData } from '@/function/msg'
import { reloadUsers } from '@/function/util'

export default defineComponent({
    name: 'ViewFriends',
    components: { FriendBody },
    props: ['list'],
    data () {
        return {
            runtimeData: runtimeData,
            loading: false,
            isSearch: false,
            searchInfo: '',
            classStatus: {} as {[key: string]: boolean}
        }
    },
    methods: {
        /**
         * 联系人被点击事件
         * @param data 联系人信息
         * @param event 点击事件
         */
        userClick (data: UserFriendElem & UserGroupElem, event: Event) {
            const sender = event.currentTarget as HTMLDivElement
            if (this.runtimeData.tags.openSideBar) {
                this.openLeftBar()
            }
            this.isSearch = false
            this.searchInfo = ''
            this.runtimeData.showList = [] as any[]

            const back = {
                type: data.user_id ? 'user' : 'group',
                id: data.user_id ? data.user_id : data.group_id,
                name: data.group_name ? data.group_name : data.remark === data.nickname ? data.nickname : data.remark + '（' + data.nickname + '）',
                avatar: data.user_id ? 'https://q1.qlogo.cn/g?b=qq&s=0&nk=' + data.user_id : 'https://p.qlogo.cn/gh/' + data.group_id + '/' + data.group_id + '/0',
                jump: sender.dataset.jump
            } as BaseChatInfoElem
            // 更新聊天框
            this.$emit('userClick', back)
            // 查重
            const getList = runtimeData.onMsgList.filter((item) => {
                const id = item.user_id ? item.user_id : item.group_id
                return Number(id) === Number(back.id)
            })
            if (getList.length === 0) {
                runtimeData.onMsgList.push(data)
            }
            // 获取历史消息
            this.$emit('loadHistory', back)
            // 切换标签卡
            const barMsg = document.getElementById('bar-msg')
            if(barMsg !== null) {
                barMsg.click()
            }
        },
        
        /**
         * 列表搜索
         * @param event 输入事件
         */
        search (event: Event) {
            const value = (event.target as HTMLInputElement).value
            if (value !== '') {
                this.isSearch = true
                this.runtimeData.showList = this.list.filter((item: UserFriendElem & UserGroupElem) => {
                    const name = (item.user_id ? (item.nickname + item.remark) : item.group_name).toLowerCase()
                    const py = item.py_name ? item.py_name : ''
                    const id = item.user_id ? item.user_id : item.group_id
                    return (value.length > 4 && py.indexOf(value.toLowerCase()) != -1) || name.indexOf(value.toLowerCase()) != -1 || id.toString() === value
                })
            } else {
                this.isSearch = false
                this.runtimeData.showList = [] as any[]
            }
        },

        /**
         * 重新加载联系人列表
         */
        reloadUser () {
            reloadUsers()
        },

        /**
         * 切换侧边栏状态
         */
        openLeftBar () {
            runtimeData.tags.openSideBar = !runtimeData.tags.openSideBar
        },

        classClick(id: string) {
            if(this.classStatus[id]) {
                this.classStatus[id] = !this.classStatus[id]
            } else {
                this.classStatus[id] = true
            }
        }
    }
})
</script>
  
<style scoped>
.exp-header {
    color: var(--color-font);
    align-items: center;
    border-radius: 7px;
    cursor: pointer;
    margin: 0 10px;
    padding: 10px;
    display: flex;
}
.exp-header:hover {
    background: var(--color-card-2);
}
.exp-header > div {
    background: var(--color-main);
    margin-right: 10px;
    border-radius: 7px;
    height: 1rem;
    width: 5px;
}
.exp-header > span {
    flex: 1;
}
.exp-header > a {
    color: var(--color-font-2);
    font-size: 0.9rem;
}

.exp-body > div {
    /* transition: transform .3s;
    transform-origin: top; */
    transform: scaleY(0);
    height: 0;
}
.exp-body.open > div {
    transform: scaleY(1);
    height: unset;
}

@media (max-width: 700px) {
    .exp-header:not(.open) > span {
        display: none;
    }
}
</style>
