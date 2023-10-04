<template>
    <div>
        <textarea cols="50" v-model="image_prompt" />
        <button @click="generateImage">Generate an image</button> <br>
        <textarea cols="50" v-model="text_prompt" />
        <button @click="generateCompletion">Generate Completion</button> <br>
    </div>
</template>

<script>
export default {
    name: "DistributedIaTest",
    data() {
        return {
            image_prompt: "A cute baby sea otter",
            image_size: "256x256",
            text_prompt: "Pourquoi le ciel est-il bleu ?"
        }
    },
    methods: {
        generateImage() {
            let ope = {
                "ope": "image_generation", data: {
                    prompt: this.image_prompt,
                    size: this.image_size,
                    parameters: {
                        prefered_models: ['stablediffusion'],
                        style: "Van Gogh, monet, Picasso"
                    }

                }, start: Date.now()
            }
            this.$pushToTodos(ope)

        },
        generateCompletion() {
            let ope = {
                "ope": "text_completion", data: {
                    prompt: this.text_prompt,
                    parameters: {
                        prefered_models: ['llama2', 'llama2:7b', 'codelllama']
                    }
                }, start: Date.now()
            }
            this.$pushToTodos(ope)

        }
    },
}
</script>

<style scoped></style>