import java.util.*;

class employee {
    int empid;
    long mobile;
    String name, address, mailid;
    Scanner get = new Scanner(System.in);

    void getdata() {
        System.out.println("Enter Name of the Employee:");
        name = get.nextLine();

        System.out.println("Enter Mail ID:");
        mailid = get.nextLine();

        System.out.println("Enter Address of the Employee:");
        address = get.nextLine();

        System.out.println("Enter Employee ID:");
        empid = get.nextInt();

        System.out.println("Enter Mobile Number:");
        mobile = get.nextLong();
        get.nextLine(); // consume newline
    }

    void display() {
        System.out.println("\n--- Employee Details ---");
        System.out.println("Employee Name   : " + name);
        System.out.println("Employee ID     : " + empid);
        System.out.println("Mail ID         : " + mailid);
        System.out.println("Address         : " + address);
        System.out.println("Mobile Number   : " + mobile);
    }
}

class programmer extends employee {
    double bp, da, hra, pf, club, net, gross;

    void getprogrammer() {
        System.out.println("Enter Basic Pay:");
        bp = get.nextDouble();
    }

    void calculateprog() {
        da = 0.97 * bp;
        hra = 0.10 * bp;
        pf = 0.12 * bp;
        club = 0.10 * bp;
        gross = bp + da + hra;
        net = gross - pf - club;

        System.out.println("\n************************************************");
        System.out.println("PAY SLIP FOR PROGRAMMER");
        System.out.println("************************************************");
        System.out.println("Basic Pay         : Rs " + bp);
        System.out.println("DA                : Rs " + da);
        System.out.println("HRA               : Rs " + hra);
        System.out.println("PF                : Rs " + pf);
        System.out.println("Staff Club Fund   : Rs " + club);
        System.out.println("Gross Pay         : Rs " + gross);
        System.out.println("Net Pay           : Rs " + net);
    }
}

class asstprofessor extends employee {
    double bp, da, hra, pf, club, net, gross;

    void getasst() {
        System.out.println("Enter Basic Pay:");
        bp = get.nextDouble();
    }

    void calculateasst() {
        da = 0.97 * bp;
        hra = 0.10 * bp;
        pf = 0.12 * bp;
        club = 0.10 * bp;
        gross = bp + da + hra;
        net = gross - pf - club;

        System.out.println("\n************************************************");
        System.out.println("PAY SLIP FOR ASSISTANT PROFESSOR");
        System.out.println("************************************************");
        System.out.println("Basic Pay         : Rs " + bp);
        System.out.println("DA                : Rs " + da);
        System.out.println("HRA               : Rs " + hra);
        System.out.println("PF                : Rs " + pf);
        System.out.println("Staff Club Fund   : Rs " + club);
        System.out.println("Gross Pay         : Rs " + gross);
        System.out.println("Net Pay           : Rs " + net);
    }
}

class associateprofessor extends employee {
    double bp, da, hra, pf, club, net, gross;

    void getassociate() {
        System.out.println("Enter Basic Pay:");
        bp = get.nextDouble();
    }

    void calculateassociate() {
        da = 0.97 * bp;
        hra = 0.10 * bp;
        pf = 0.12 * bp;
        club = 0.10 * bp;
        gross = bp + da + hra;
        net = gross - pf - club;

        System.out.println("\n************************************************");
        System.out.println("PAY SLIP FOR ASSOCIATE PROFESSOR");
        System.out.println("************************************************");
        System.out.println("Basic Pay         : Rs " + bp);
        System.out.println("DA                : Rs " + da);
        System.out.println("HRA               : Rs " + hra);
        System.out.println("PF                : Rs " + pf);
        System.out.println("Staff Club Fund   : Rs " + club);
        System.out.println("Gross Pay         : Rs " + gross);
        System.out.println("Net Pay           : Rs " + net);
    }
}

class professor extends employee {
    double bp, da, hra, pf, club, net, gross;

    void getprofessor() {
        System.out.println("Enter Basic Pay:");
        bp = get.nextDouble();
    }

    void calculateprofessor() {
        da = 0.97 * bp;
        hra = 0.10 * bp;
        pf = 0.12 * bp;
        club = 0.10 * bp;
        gross = bp + da + hra;
        net = gross - pf - club;

        System.out.println("\n************************************************");
        System.out.println("PAY SLIP FOR PROFESSOR");
        System.out.println("************************************************");
        System.out.println("Basic Pay         : Rs " + bp);
        System.out.println("DA                : Rs " + da);
        System.out.println("HRA               : Rs " + hra);
        System.out.println("PF                : Rs " + pf);
        System.out.println("Staff Club Fund   : Rs " + club);
        System.out.println("Gross Pay         : Rs " + gross);
        System.out.println("Net Pay           : Rs " + net);
    }
}

public class salary {
    public static void main(String args[]) {
        int choice, cont;
        Scanner c = new Scanner(System.in);

        do {
            System.out.println("\n====== PAYROLL PROGRAM ======");
            System.out.println("1. PROGRAMMER");
            System.out.println("2. ASSISTANT PROFESSOR");
            System.out.println("3. ASSOCIATE PROFESSOR");
            System.out.println("4. PROFESSOR");
            System.out.print("Enter Your Choice: ");
            choice = c.nextInt();

            switch (choice) {
                case 1:
                    programmer p = new programmer();
                    p.getdata();
                    p.getprogrammer();
                    p.display();
                    p.calculateprog();
                    break;

                case 2:
                    asstprofessor asst = new asstprofessor();
                    asst.getdata();
                    asst.getasst();
                    asst.display();
                    asst.calculateasst();
                    break;

                case 3:
                    associateprofessor asso = new associateprofessor();
                    asso.getdata();
                    asso.getassociate();
                    asso.display();
                    asso.calculateassociate();
                    break;

                case 4:
                    professor prof = new professor();
                    prof.getdata();
                    prof.getprofessor();
                    prof.display();
                    prof.calculateprofessor();
                    break;

                default:
                    System.out.println("Invalid choice!");
            }

            System.out.println("\nDo you want to continue? (1 = Yes, 0 = Quit): ");
            cont = c.nextInt();

        } while (cont == 1);

        c.close();
    }
}
