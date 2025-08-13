'use client';

import Image from 'next/image';
import React from 'react';

export default function Section1() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <h2 className="text-2xl font-bold mb-4">
        🟥 Pourquoi je ne travaille pas en Société de Services (ESN)
      </h2>

      <h3 className="text-xl font-semibold">
        Le système ne regarde pas le fond
      </h3>

      <p className="text-base leading-relaxed">
        J’ai envoyé plus de <strong>200 candidatures</strong> à des ESN et des éditeurs logiciels.
        À chaque fois : un vrai portfolio, du code propre, des projets en ligne.
        Pour un poste en développement frontend ou fullstack, c’est normalement la base.
      </p>

      <p className="text-base leading-relaxed">
        Mais je voulais savoir ce qui se passait vraiment.
        Alors j’ai suivi les visites. <strong>Traqué les IP</strong>.
        Objectif : voir si les recruteurs lisaient ce que je leur envoyais.
      </p>

      <p className="text-base leading-relaxed">
        👉 <strong>Résultat : 2 % d’ouvertures.</strong> <br />
        Pas 2 % de réponses. 2 % de recruteurs qui ont simplement cliqué pour regarder.
      </p>

      <p className="text-base leading-relaxed">
        Est-ce que c’est parce que mon travail n’était pas au niveau ? <strong>Non.</strong><br />
        C’est juste que le <strong>système RH</strong> repose sur autre chose :
      </p>

      <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
        <li><strong>On te lit</strong> si tu rentres dans les cases : âge, diplôme, parcours “classique”</li>
        <li>On filtre avec des <strong>mots-clés, des scores automatiques</strong>, des tests absurdes</li>
        <li>Les recruteurs sont souvent très jeunes, <strong>rarement formés à juger du code</strong></li>
        <li>Si t’as pas ton <strong>Bac+5 à 23 ans</strong>, t’es vite perçu comme “hors-circuit”</li>
        <li>Et une fois en poste ? Beaucoup de missions = <strong>changer la couleur d’un bouton</strong></li>
      </ul>

      <p className="text-base leading-relaxed">
        Ce que j’en ai conclu, c’est simple : <strong>dans ce système, ce n’est pas le travail qui compte.</strong><br />
        C’est le diplôme, l’âge, le parcours… tout sauf le fond.
        Et en filtrant comme ça, ils laissent passer des profils motivés, complets, autonomes.
        <strong>Tant pis pour eux.</strong>
      </p>

      <h3 className="text-xl font-semibold">
        Facturer du temps ou livrer un résultat
      </h3>

      <p className="text-base leading-relaxed">
        Dans une ESN (Société de Services Numériques), <strong>on ne vend pas un résultat.</strong><br />
        On vend du <strong>temps de service</strong>.
      </p>

      <p className="text-base leading-relaxed">
        Le client paie pour un volume horaire, pas pour une solution livrée.
        Un développeur peut passer 8 heures sur une tâche bancale, non finalisée, avec des bugs —
        ça n’a pas d’impact sur la facturation.
        Ce qui compte, c’est que les heures soient consommées.
        Et s’il y a des problèmes, des retours, des retards ?
        Ce sera simplement <strong>plus de jours facturés</strong>.
        Dans ce modèle, <strong>la qualité n’est pas prioritaire</strong>. La priorité, c’est que le temps tourne.
      </p>

      <p className="text-base leading-relaxed">
        <strong>Moi, je fonctionne autrement.</strong> Je facture au résultat, pas à l’heure.
        Je donne une estimation claire dès le départ, et je livre ce qui est prévu.
        Si je suis trop lent ? C’est à moi d’aller plus vite —
        pas au client de payer plus.
        Je préfère prendre ce risque, parce que je sais ce que je fais.
        Et parce que je trouve normal d’assumer <strong>la responsabilité</strong> de ce que je propose.
      </p>

      <p>On me dit parfois “toutes les ESN ne sont pas comme ça”.  
Mais sur plus de 200 candidatures, je n’en ai pas vu une seule qui sorte du lot.  
        Mais permettez moi d'en douter.</p>
      <p>Et sur les 2% ils sont peut etre déllusionnels sur les attentes d'un portfolio. Genre s'attendre d'un junior qu'on payer le smic : qu'il ait construit un produit avec une database de 100k users, ou qu'il ( comme moi ) rank sur une serp. Genre normalement c'est trop tard tu peux pas juste accepter un mec parqu'il te concurence, fait baisser les prix, siphonne la serp, te fait passer pour un clown que t'es. </p>

      <div className="text-sm italic text-gray-500">
        Ce post dit tout haut ce que j’ai constaté tout seul, en traquant les ouvertures
        (un lead développeur, c’est le développeur qui choisit qui recruter).
      </div>

      <div className="pt-6">
        <Image
          src="/images/lead-dev2.png"
          alt="Capture d'écran LinkedIn floutée"
          width={600}
          height={400}
          style={{ objectFit: 'contain' }}
          className="rounded-lg shadow-md mx-auto"
        />
      </div>
    </section>
  );
}
