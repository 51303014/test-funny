import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { DB_ENGINE, DEFAULT_COLUMNS } from "./migration.helper";

export class InitArticle1616818598875 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await this.initArticleTable(queryRunner)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

    private async initArticleTable(queryRunner: QueryRunner) {
        await queryRunner.createTable(new Table({
            name: 'video',
            columns: [
                ...DEFAULT_COLUMNS,
                {
                    name: 'url',
                    type: 'varchar',
                    length: '200'
                },
                {
                    name: 'authorId',
                    type: 'varchar',
                    length: '255',
                },
            ],
            indices: [{name: 'id-index', columnNames: ['id']}],
            engine: DB_ENGINE.MYISAM
        }))
    }

}
