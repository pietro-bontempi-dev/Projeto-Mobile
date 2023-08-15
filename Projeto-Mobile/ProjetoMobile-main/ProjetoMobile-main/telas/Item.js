import React from "react";

import { View, TextInput, Button } from "react-native"

import Texto from '../src/componentes/Texto';
import estilosMinhaCesta from "./estilosMinhaCesta";

export default function Item({nome, descricao, preco}){

    return <>
    <View style={estilosMinhaCesta.margem}>
        <Texto style={estilosMinhaCesta.nome}>{nome}</Texto>
        <Texto style={estilosMinhaCesta.descricao}>{descricao}</Texto>
        <Texto style={estilosMinhaCesta.preco}>{preco}</Texto>
    

    <View style={estilosMinhaCesta.listaDesejos}>
        <View style={estilosMinhaCesta.posicao}>
            <Texto>Quantidade</Texto>
            <TextInput value="0" />
        </View>
        <View style={estilosMinhaCesta.posicao}>
            <Texto>Preço</Texto>
            <Texto>0.00</Texto>
        </View>

        <Button title="Adicionar" />

    </View>

    <View style={estilosMinhaCesta.divisor}></View>

    </View>

    </>  

}