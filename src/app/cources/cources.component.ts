import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.scss'],
})
export class CourcesComponent implements OnInit {
  constructor() {}

  courses = [
    {
      image: 'assets/images/course1.png',
      heading: 'Conflict, Culture and Democracy',
      description: `Our flagship course helps demystify the world that we live in. How do we make sense of our constantly
      changing world? What are the key moving parts of this complex world, and how do they relate to each
      other? How do we engage with urgent and vital issues around us and still maintain our sanity? How do
      we connect to others whose experiences are different? Why is it important to change the way we think,
      if we hope to heal our severely traumatized society and democracy? What might all of us lose if we
      allow our, admittedly, corrupted democracy to fail- because it is not good enough?`,
      cost: '250',
    },
    {
      image: 'assets/images/course2.png',
      heading: 'Collaborative Relationships',
      description: `This course will help you look at, both personal and civic relationships in a whole, new way. What are
      relationships, really, and how do they work? How have they changed over the past twenty or fifty years?
      Do you actively contribute to healthy relationships, or do you just consume relationships? What do
      relationships in the family, community or a democracy have in common? How do they go wrong and
      what can you do to radically improve them? How do you build healthy relationships in an
      individualistic and increasingly mobile and fragmented world.`,
      cost: '250',
    },
    {
      image: 'assets/images/course3.png',
      heading: 'Diversity and Pluralism',
      description: `This course was developed out of MetaCulture’s decades long work on diversity and inter-faith conflict
      management experiences. What do Multiculturism, Pluralism and Secularism really mean? Do all
      cultures and religious groups respond similarly to the idea of pluralistic co-existence? Are some value
      systems at odds with liberal democracies and pluralism itself? How can minorities (whether religious,
      ethnic, racial, or sexual) survive and coexist alongside a dominant group? How does the weakening of
      liberal democracies globally, and in the USA, affect the idea of pluralistic coexistence in other parts of
      the world?`,
      cost: '250',
    },
    {
      image: 'assets/images/course4.png',
      heading: 'Critical Thinking',
      description: `This course demystifies the thinking process. What does thinking have to do with the production of
      ideas, opinions, concepts, strong emotions, and original thoughts? What prevents us from being open
      and curious learners? How can we think realistically about our world, so we can make useful decisions
      and choices? How can we cultivate our intellectual, imaginative, and relational capabilities to become
      more effective as citizens of a democracy? How do we equip ourselves to understand the world when
      politicians, activists, technology, and media are manipulating our emotions and pushing falsehoods?`,
      cost: '250',
    },
    {
      image: 'assets/images/course5.png',
      heading: '12 Laws of Democracy and Pluralism',
      description: `This course is a much-needed reality check that systematically dismantles the key misconceptions and
      fallacies most of us hold about free and open societies. When people think about democracy they
      usually think of political parties, elections, big money, and minority rights. Similarly, when thinking
      about diversity, they tend to think about equality, equity, inclusion (or slavery and colonization). This
      
      course helps situate these concepts within the larger historical and geopolitical context. Most of all it
      helps correct erroneous beliefs and logical fallacies that make us part of the problem- while helping
      establish realistic expectations for what our democracies can be.`,
      cost: '250',
    },
  ];

  ngOnInit(): void {}
}
