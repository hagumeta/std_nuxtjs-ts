<template>
    <v-card>
        <v-container>
            <v-row>
                <v-col>
                    this is test.
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field
                        name="test"
                        label="何か入力してください"
                        id="id"
                        v-model="text"
                    >
                        <template #append-outer>
                            <v-btn block color="primary" dark @click="reset">reset</v-btn>
                        </template>
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <div>{{ display }}</div>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class TestPage extends Vue {
        text: string;
        color: string;
        constructor() {
            super();
            this.text = "";
        }

        get display() {
            return this.text ? this.text + "\nこれはcomputed." : "入力なし";
        }
        reset() {
            this.text = "";
        }
    }
</script>

<style scoped>

</style>