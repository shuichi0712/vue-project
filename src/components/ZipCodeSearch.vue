<template>
    <div>
        <input type="search" v-model="state.searchText"/>
        <button @click="handleZipCodeSearch">search</button>
        <p v-if="state.errorMessage ===''">Error!</p>
        <div v-else>
            <div>都道府県:{{state.address.data.results[0].address1}}</div>
            <div>市区町村:{{state.address.data.results[0].address2}}</div>
            <div>市区町村:{{state.address.data.results[0].address3}}</div>
        </div>
    </div>
</template>
<script lang="ts">
import axios from 'axios';
import { defineComponent, reactive } from 'vue';

export default defineComponent({
    setup() {
        const state = reactive({
            searchText: "",
            address: {
                message: "",
                data:{
                    message: "",
                    status: 0,
                    results:[{}]
                }
            },
            errorMessage: ""
        })
        const handleZipCodeSearch = (async() => {
            console.log("test")
            try {
                state.address = await axios.get("http://zipcloud.ibsnet.co.jp/api/search?zipcode=" + state.searchText)
                console.log(state.address)
                
            } catch(e: any){
                state.errorMessage = e
            }
            if(state.address.data.status === 400) state.errorMessage = state.address.message
        })
        return {
            state,
            handleZipCodeSearch
        }
    }
})
</script>