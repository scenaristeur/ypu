<template>
  <div>

    IPFS NODE : {{cid}}
    <button @click="testIpfs">Test</button>

  </div>
</template>

<script>
import * as IPFS from 'ipfs-core'
import { encode, decode } from '@ipld/dag-cbor'
import { CID } from 'multiformats'


export default {
  name: "IpfsNode",

  data(){
    return{
      ipfs: null,
      cid: "loading"
    }
  },
  created(){
    console.log("Ipfs creation")
    this.initNode()
  },


  methods:{
    async initNode(){

      this.ipfs = await IPFS.create()
      console.log('IPFS', this.ipfs)
    },
    async testIpfs(){

      const { cid } = await this.ipfs.add('Hello world')
      console.info(cid.toString())

// https://js.ipfs.tech/fr/
      const stream = this.ipfs.cat(cid.toString())
      const decoder = new TextDecoder()
      let dataDeco = ''

      for await (const chunk of stream) {
        // chunks of data are returned as a Uint8Array, convert it back to a string
        dataDeco += decoder.decode(chunk, { stream: true })
      }

      console.log("Text data decoded", dataDeco)



      // ipld /. dag-cbor https://github.com/ipld/js-dag-cbor
      const obj = {
        x: 1,
        /* CID instances are encoded as links */
        y: [2, 3, CID.parse('QmaozNR7DZHQK1ZcU9p7QdrshMvXqWK6gpu5rmrkPdT3L4')],
        z: {
          a: CID.parse('QmaozNR7DZHQK1ZcU9p7QdrshMvXqWK6gpu5rmrkPdT3L4'),
          b: null,
          c: 'string'
        }
      }
      console.log(obj)

      let data = encode(obj)
      console.log("data",data)
      let decoded = decode(data)
      console.log("decoded",decoded)
      decoded.y[0] // 2
      let cid2 =   CID.asCID(decoded.z.a) // cid instance
      console.log("cid2", cid2.toString())





    }
  }


}
</script>

<style>

</style>
