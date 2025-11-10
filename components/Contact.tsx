export default function Contact() {
  return (
    <section id="contact" className="Contact">
      <h2>Contact</h2>
      <p>
        Pour toute demande de partenariat, d’information ou d’interview, vous pouvez contacter Noah
        via le formulaire ci-dessous.
      </p>

      <form className="ContactForm">
        <label>
          Nom
          <input type="text" placeholder="Votre nom" />
        </label>

        <label>
          Email
          <input type="email" placeholder="votre@email.com" />
        </label>

        <label>
          Message
          <textarea placeholder="Votre message..." rows={4}></textarea>
        </label>

        <button type="submit" className="Button">
          Envoyer
        </button>
      </form>
    </section>
  );
}
