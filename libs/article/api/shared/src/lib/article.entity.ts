import { BaseEntity } from '@realworld/shared/api/foundation';
import { Column, Entity } from 'typeorm';

@Entity()
export abstract class Video extends BaseEntity {
  @Column()
  url: string;
  @Column()
  authorId: string;

  // @OneToMany('Favorite', (favorite: any) => favorite.article)
  // @JoinColumn({name: 'slug', referencedColumnName: 'articleSlug'})
  // favorites: Favorite[]
}
