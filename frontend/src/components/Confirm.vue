  
<template>
    <v-dialog v-model="dialog" :max-width="options.width" :style="{ zIndex: options.zIndex }" @keydown.esc="cancel">
        <v-card>
            <v-toolbar dark :color="options.color" dense flat>
                <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
            </v-toolbar>
            <v-card-text 
                v-show="!!message" 
                class="pa-4">
                <p>
                    {{ message }}
                </p>
                <v-alert
                    dense
                    text
                    :type="options.type"
                    v-show="!!options.desc" >
                    {{options.desc}}
                </v-alert>
            </v-card-text>
            <v-card-actions class="pt-0" v-if="options.action=='yescancel'">
                <v-spacer></v-spacer>
                <v-btn color="primary darken-1" text @click.native="agree">YA</v-btn>
                <v-btn color="grey" text @click.native="cancel">TIDAK</v-btn>
            </v-card-actions>
            <v-card-actions class="pt-0" v-else>
                <v-spacer></v-spacer>
                <v-btn color="primary darken-1" text @click.native="agree">YA</v-btn>                
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
/**
 * Vuetify Confirm Dialog component
 *
 * Insert component where you want to use it:
 * <confirm ref="confirm"></confirm>
 *
 * Call it:
 * this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' }).then((confirm) => {})
 * Or use await:
 * if (await this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' })) {
 *   // yes
 * }
 * else {
 *   // cancel
 * }
 *
 * Alternatively you can place it in main App component and access it globally via this.$root.$confirm
 * <template>
 *   <v-app>
 *     ...
 *     <confirm ref="confirm"></confirm>
 *   </v-app>
 * </template>
 *
 * mounted() {
 *   this.$root.$confirm = this.$refs.confirm.open
 * }
 */
export default {
    name: 'Confirm',
    data: () => ({
        dialog: false,
        resolve: null,
        reject: null,
        message: null,        
        title: null,

        options: {
            color: 'primary',
            width: 290,
            zIndex: 200,
            desc: null,
            type:'error',
            action:'yescancel'
        }

    }),
    methods: {
        open(title, message, options) {
            this.dialog = true,
            this.title = title,
            this.message = message,
            this.options = Object.assign(this.options, options)
            return new Promise((resolve, reject) => {
                this.resolve = resolve
                this.reject = reject
            })
        },
        agree() {
            this.resolve(true)
            this.dialog = false
        },
        cancel() {
            this.resolve(false)
            this.dialog = false
        }
    }
}
</script>