<template>
    <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" :dark="darkTheme" id="inspire">
        <v-container>
            <v-dialog v-model="dialog" width="500">
                <v-card>
                    <v-card-title class="text-h5 lighten-2 alert-title" id="cv-alert-title"></v-card-title>
                    <v-card-text class="alert-message" id="cv-alert-message"></v-card-text>
                </v-card>
            </v-dialog>
            <v-layout wrap>
                <v-flex sm12 md6 offset-md3>
                    <v-card elevation="4" light tag="section">
                        <v-card-title>
                            <v-layout align-center justify-space-between>
                                <h3 class="headline">
                                    {{ platformName }}
                                </h3>
                                <v-flex>
                                    <v-img
                                        :alt="platformName"
                                        class="ml-3"
                                        contain
                                        height="48px"
                                        position="center right"
                                        :src="require('/static/img/hr.png')"
                                    ></v-img>
                                </v-flex>
                            </v-layout>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-form @submit.prevent="login" id="check-login-form">
                                <p v-if="errors" class="text-red-200 italic">{{ errors }}</p>
                                <p v-else>Sign in with your email and password:</p>

                                <v-text-field outline label="Email" type="text" v-model="form.email"></v-text-field>
                                <v-text-field
                                    outline
                                    hide-details
                                    label="Password"
                                    type="password"
                                    v-model="form.password"
                                ></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                            <v-spacer></v-spacer>
                            <v-btn
                                form="check-login-form"
                                type="submit"
                                color="info"
                                :large="$vuetify.breakpoint.smAndUp"
                            >
                                <v-icon left>lock</v-icon>
                                Login
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
export default {
    layout: 'empty',
    data: () => ({
        form: {
            email: '',
            password: '',
        },
        platformName: 'HR',
        darkTheme: '',
        errors: '',
        dialog: false,
        errorClass: '',
    }),

    methods: {
        
     async login() {
            try {
                // The 'laravelSanctum' strategy automatically:
                // 1. Calls /sanctum/csrf-cookie
                // 2. Posts to your login endpoint
                // 3. Fetches the user data and saves it in Vuex
                await this.$auth.loginWith('laravelSanctum', {
                    data: {
                        email: this.form.email,
                        password: this.form.password
                    }
                });

                console.log('Successful login');
                // User is now globally available via this.$auth.user
                this.$router.push('/cv-list'); 
                
            } catch (err) {
                console.error("Login failed:", err);
                this.dialog = true;
                this.errorClass = 'error';
                
                // Helpful tip: err.response.data usually contains Laravel's validation errors
                const message = err.response?.data?.error || 'These credentials do not match our records.';
                
                setTimeout(() => {
                    document.getElementById('cv-alert-title').innerHTML = 'Error:';
                    document.getElementById('cv-alert-message').innerHTML = message;
                }, 0);
            }
        }
        
    },
};
</script>
