<template>
  <v-card>
    <slot name="media"></slot>
    <v-container>
      <v-layout row wrap>
        <v-card-title>
          <v-container fluid>
            <v-layout row wrap>
              <slot></slot>
            </v-layout>
          </v-container>
        </v-card-title>
      </v-layout>
    </v-container>
  </v-card>
</template>
