<template>
    <div class="profile-page">
        <div class="profile-page__top">
            <base-card>
                <div class="profile-page__arrow-back icon" @click="onTransitionBack">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.17006 6.71005L5.41006 10.9501C5.50302 11.0438 5.61362 11.1182 5.73548 11.1689C5.85734 11.2197 5.98805 11.2458 6.12006 11.2458C6.25207 11.2458 6.38277 11.2197 6.50463 11.1689C6.62649 11.1182 6.73709 11.0438 6.83006 10.9501C7.01631 10.7627 7.12085 10.5092 7.12085 10.2451C7.12085 9.98087 7.01631 9.72741 6.83006 9.54005L3.29006 6.00005L6.83006 2.46005C7.01631 2.27269 7.12085 2.01924 7.12085 1.75505C7.12085 1.49086 7.01631 1.23741 6.83006 1.05005C6.73662 0.95737 6.6258 0.884045 6.50396 0.83428C6.38213 0.784515 6.25166 0.759291 6.12006 0.760052C5.98845 0.759291 5.85799 0.784515 5.73615 0.83428C5.61431 0.884045 5.5035 0.95737 5.41006 1.05005L1.17006 5.29005C1.07633 5.38301 1.00194 5.49362 0.951167 5.61547C0.900398 5.73733 0.874259 5.86804 0.874259 6.00005C0.874259 6.13206 0.900398 6.26277 0.951167 6.38463C1.00194 6.50649 1.07633 6.61709 1.17006 6.71005Z" fill="#050510"/>
                    </svg>
                </div>
                <div class="profile-page__profile profile">
                    <div class="profile__description">
                        <span class="profile__fullname">{{ selectedEmployee.firstName }} {{ selectedEmployee.lastName }} </span>
                        <span class="profile__tag"> {{ selectedEmployee.userTag }}</span>
                    </div>
                    <span class="profile__position"> {{ selectedEmployee.position }} </span>
                </div>
            </base-card>
        </div>
        <div class="profile-page__bottom">
            <base-card>
                <div class="profile__top">
                    <div class="profile__birthday">
                        <div class="profile__birthday-icon icon">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 7.67002C19.9368 7.48711 19.822 7.32645 19.6693 7.20753C19.5167 7.0886 19.3328 7.01652 19.14 7.00002L13.45 6.17002L10.9 1.00002C10.8181 0.830952 10.6902 0.688365 10.5311 0.588597C10.3719 0.488828 10.1878 0.435913 9.99998 0.435913C9.81212 0.435913 9.62806 0.488828 9.46889 0.588597C9.30971 0.688365 9.18186 0.830952 9.09998 1.00002L6.54998 6.16002L0.859977 7.00002C0.6749 7.02633 0.500902 7.10399 0.357728 7.22418C0.214554 7.34438 0.107937 7.5023 0.0499774 7.68002C-0.00307759 7.8537 -0.00783865 8.03854 0.0362052 8.21472C0.080249 8.39089 0.171435 8.55175 0.299977 8.68002L4.42998 12.68L3.42998 18.36C3.3896 18.5484 3.40453 18.7445 3.47296 18.9247C3.54139 19.1048 3.66041 19.2613 3.81571 19.3754C3.971 19.4895 4.15595 19.5563 4.34831 19.5678C4.54066 19.5792 4.73224 19.5349 4.89998 19.44L9.99998 16.77L15.1 19.44C15.2403 19.5192 15.3988 19.5606 15.56 19.56C15.7718 19.5608 15.9784 19.4942 16.15 19.37C16.3051 19.2589 16.4252 19.1057 16.4961 18.9285C16.567 18.7513 16.5857 18.5575 16.55 18.37L15.55 12.69L19.68 8.69002C19.8244 8.5677 19.9311 8.40693 19.9877 8.22637C20.0444 8.04582 20.0486 7.8529 20 7.67002ZM13.85 11.67C13.7342 11.7824 13.6474 11.9212 13.5969 12.0744C13.5464 12.2276 13.5337 12.3908 13.56 12.55L14.28 16.75L10.52 14.75C10.3738 14.6777 10.213 14.6401 10.05 14.6401C9.88694 14.6401 9.72611 14.6777 9.57998 14.75L5.81998 16.75L6.53998 12.55C6.56622 12.3908 6.55354 12.2276 6.50305 12.0744C6.45255 11.9212 6.36572 11.7824 6.24998 11.67L3.24998 8.67002L7.45998 8.06002C7.62198 8.03749 7.77598 7.97556 7.90848 7.87967C8.04098 7.78379 8.14794 7.65686 8.21998 7.51002L9.99998 3.70002L11.88 7.52002C11.952 7.66686 12.059 7.79379 12.1915 7.88968C12.324 7.98556 12.478 8.04749 12.64 8.07002L16.85 8.68002L13.85 11.67Z" fill="#050510"/>
                            </svg>
                        </div>
                        <span class="profile__birthday-date">{{ formatBirthday }}</span>
                    </div>
                    <div class="profile__age">
                        <span>{{ age }}</span>
                    </div>
                </div>
                <div class="profile__bottom">
                    <a :href="phoneLink" class="profile__phone">
                        <div class="profile__phone-icon icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.44 13C19.22 13 18.99 12.93 18.77 12.88C18.3245 12.7818 17.8866 12.6515 17.46 12.49C16.9961 12.3212 16.4861 12.33 16.0283 12.5146C15.5704 12.6992 15.1971 13.0466 14.98 13.49L14.76 13.94C13.786 13.3982 12.891 12.7252 12.1 11.94C11.3147 11.149 10.6418 10.254 10.1 9.27999L10.52 8.99999C10.9633 8.78291 11.3108 8.40952 11.4954 7.95168C11.68 7.49384 11.6888 6.9839 11.52 6.51999C11.3612 6.09241 11.2309 5.65479 11.13 5.20999C11.08 4.98999 11.04 4.75999 11.01 4.52999C10.8885 3.82561 10.5196 3.18773 9.9696 2.73123C9.4196 2.27473 8.72467 2.0296 8.00998 2.03999L5.00998 2.03999C4.57901 2.03594 4.15223 2.1248 3.75869 2.30052C3.36515 2.47624 3.01409 2.73469 2.72941 3.05827C2.44473 3.38186 2.23311 3.76298 2.10897 4.1757C1.98482 4.58842 1.95106 5.02305 2.00998 5.44999C2.54272 9.63937 4.45601 13.5319 7.44763 16.5126C10.4393 19.4934 14.3387 21.3925 18.53 21.91H18.91C19.6474 21.9111 20.3594 21.6405 20.91 21.15C21.2263 20.867 21.4791 20.5202 21.6514 20.1323C21.8238 19.7444 21.9119 19.3244 21.91 18.9V15.9C21.8977 15.2054 21.6448 14.5365 21.1943 14.0077C20.7439 13.4788 20.1238 13.1226 19.44 13ZM19.94 19C19.9398 19.142 19.9094 19.2823 19.8508 19.4116C19.7921 19.5409 19.7066 19.6563 19.6 19.75C19.4882 19.8465 19.3576 19.9185 19.2164 19.9616C19.0752 20.0046 18.9265 20.0177 18.78 20C15.0349 19.5198 11.5562 17.8065 8.89269 15.1303C6.22917 12.4541 4.53239 8.96733 4.06998 5.21999C4.05406 5.07351 4.06801 4.92532 4.11098 4.78438C4.15395 4.64344 4.22505 4.51268 4.31998 4.39999C4.41369 4.29332 4.52904 4.20783 4.65836 4.14921C4.78767 4.09058 4.92799 4.06017 5.06998 4.05999L8.06998 4.05999C8.30253 4.05482 8.5296 4.13087 8.71212 4.27506C8.89464 4.41925 9.02119 4.62256 9.06998 4.84999C9.10998 5.12332 9.15998 5.39332 9.21998 5.65999C9.3355 6.18713 9.48924 6.70517 9.67998 7.20999L8.27998 7.85999C8.16028 7.91491 8.0526 7.99294 7.96314 8.08959C7.87367 8.18623 7.80418 8.2996 7.75865 8.42318C7.71312 8.54677 7.69245 8.67812 7.69783 8.80971C7.7032 8.9413 7.73452 9.07054 7.78998 9.18999C9.22918 12.2727 11.7072 14.7508 14.79 16.19C15.0334 16.29 15.3065 16.29 15.55 16.19C15.6747 16.1454 15.7893 16.0764 15.8871 15.9872C15.985 15.8979 16.0641 15.7901 16.12 15.67L16.74 14.27C17.2569 14.4549 17.7846 14.6085 18.32 14.73C18.5866 14.79 18.8566 14.84 19.13 14.88C19.3574 14.9288 19.5607 15.0553 19.7049 15.2378C19.8491 15.4204 19.9252 15.6474 19.92 15.88L19.94 19Z" fill="#050510"/>
                            </svg>
                        </div>
                        <span class="profile__phone-text">{{ selectedEmployee.phone }}</span>
                    </a>
                </div>
            </base-card>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        data() {
            return {
                selectedEmployee: null
            }
        },
        computed: {
            phoneLink() {
                return `tel:${this.selectedEmployee.phone}`;
            },
            age() {
                const now = new Date();
                const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                const dob = new Date(this.selectedEmployee.birthday); 
                const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());

                let age;

                age = today.getFullYear() - dob.getFullYear();

                if (today < dobnow) age -= 1;

                age = Math.abs(age) % 100;
                const age_ = age % 10;

                if (age > 10 && age < 20) {
                    return `${age} лет`;
                } else if (age_ > 1 && age_ < 5) {
                    return `${age} года`;
                } else if (age_ === 1) {
                return `${age} год`; 
                } else {
                    return `${age} лет`;
                }
            },
            formatBirthday() {
                return new Date(this.selectedEmployee.birthday).toLocaleString("ru", {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',

                }).slice(0, -3)
            }
        },
        methods: {
            onTransitionBack() {
                window.history.back();
            }
        },
        created() {
            this.selectedEmployee = this.$store.getters['filter/listEmployees'].find(
                (employee) => employee.id === this.id
            );
        },
    }
</script>

<style lang="scss">
    .profile-page {
        &__top {
            padding-bottom: 24px;
            background-color: #F7F7F8;
        }
        &__arrow-back {
            margin-top: 8px;
            cursor: pointer;
        }
        &__profile {
            margin-top: 30px;
        }
    }

    .profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        &__fullname {
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;
            color: #050510;
        }
        &__tag {
            margin-left: 4px;
            text-transform: lowercase;
            font-weight: 400;
            font-size: 17px;
            line-height: 22px;
            color: #97979B;
        }
        &__position {
            margin-top: 12px;
            font-weight: 400;
            font-size: 13px;
            line-height: 16px;
            color: #55555C;
        }
        &__top {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        &__bottom {
            border-top: 0.5px solid #F7F7F8;
        }
        &__top, &__bottom {
            padding: 20px 0;
        }
        &__birthday {
            &-date {
                font-weight: 500;
                font-size: 16px;
                line-height: 20px;
                color: #050510;
            }
        }
        &__phone {
            text-decoration: none;
            &-text {
                font-weight: 500;
                font-size: 16px;
                line-height: 20px;
                color: #050510;
            }
        }
        &__birthday, &__phone {
            display: flex;
            align-items: center;
            &-icon {
                margin-right: 12px;
            }
        }
        &__age {
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: #97979B;
        }
    }

    .icon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>