using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CadastroProfissionalApi.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Empregado",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(maxLength: 150, nullable: true),
                    Sobrenome = table.Column<string>(maxLength: 150, nullable: true),
                    Email = table.Column<string>(maxLength: 250, nullable: true),
                    Idade = table.Column<int>(nullable: false),
                    DataAdmissao = table.Column<DateTime>(nullable: false),
                    Genero = table.Column<string>(maxLength: 20, nullable: true),
                    Casado = table.Column<int>(nullable: false),
                    Ativo = table.Column<int>(nullable: false),
                    IdProfissao = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Empregado", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Profissao",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DescricaoProfissao = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Profissao", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Empregado");

            migrationBuilder.DropTable(
                name: "Profissao");
        }
    }
}
