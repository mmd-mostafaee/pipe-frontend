import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', {
    state: () => {
        return {
            members: [
                {
                    'id': 1,
                    'name': 'علی',
                    'username': 'ali'
                },
                {
                    'id': 2,
                    'name': 'ممد',
                    'username': 'ali'
                },
            ]
        }
    },

    actions: {
        setMembers(members) {
            this.members = members
        }
    }
})